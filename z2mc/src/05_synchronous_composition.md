# Computing the Intersection Between the System and the Property

![Progress Overview](/assets/img/z2mc/overview_06.png){: width="400" style="display:block; margin-left:auto; margin-right:auto"}

## Safety Properties: Looking into the Past

### Theoretical approach

1. Collect the atomic propositions
2. Compute the Kripke structure of the state-space
3. Convert the Kripke structure to NFA.
4. Compose the system NFA with the property NFA

### Let the property compute the Kripke interpretation

1. Convert the state-space to a NFA
2. Compose the system NFA with the property NFA

### Dynamic Composition of the System with the Property

1. Dynamically obtain an NFA interpretation of the system during the composition.

```python
class ConfigurationSynchronousProduct(SemanticTransitionRelation):
    def __init__(self, lhs, rhs):
        self.lhs = lhs
        self.rhs = rhs

    def initial(self):
        return list(map(lambda c: (None, c), self.rhs.initial()))

    def actions(self, source):
        synchronous_actions = []
        lhs_source, rhs_source = source
        if source[0] is None:
            for target in self.lhs.initial():
                self.get_synchronous_actions(target, rhs_source, synchronous_actions)
            return synchronous_actions
        # get all lhs actions
        lhs_actions = self.lhs.actions(lhs_source)
        number_of_actions = len(lhs_actions)
        for lhs_a in lhs_actions:
            _, target = self.lhs.execute(lhs_a, lhs_source)
            if target is None:
                number_of_actions -= 1
            self.get_synchronous_actions(target, rhs_source, synchronous_actions)

        # if number_of_actions == 0:
        #     self.get_synchronous_actions(kripke_source, buchi_source, synchronous_actions)
        return synchronous_actions

    def get_synchronous_actions(self, lhs_config, rhs_config, io_synchronous_actions):
        rhs_actions = self.rhs.actions(lhs_config, rhs_config)
        io_synchronous_actions.extend(map(lambda ra: (lhs_config, ra), rhs_actions))

    def execute(self, action, configuration):
        lhs_target, rhs_action = action
        _, rhs_source = configuration
        return kripke_target, self.rhs.execute(rhs_action, lhs_target, rhs_source)
```

### Step Predicates: Looking at execution steps

Expressing conditions on execution steps expands the possibilities for debugging. First of all, the step breakpoints allow us to reason about the action between the configurations. In their simplest form, they can allow stopping the execution when a named action is reached, `|action("toOne")|`.

Furthermore, the step breakpoints allow reasoning on the delta changes between two consecutive configurations of a behavior (before and after an action). For instance, this will allow us to detect the rising edge of the one-bit clock, `|clock=0 && clock'=1|`.



```python
class StepSynchronousProduct(SemanticTransitionRelation):
    def __init__(self, lhs, rhs):
        self.lhs = lhs
        self.rhs = rhs

    def initial(self):
        initial_configurations = []
        for lc in self.lhs.initial():
            for rc in self.rhs.initial():
                initial_configurations.append((lc, rc))
        return initial_configurations

    def actions(self, configuration):
        synchronous_actions = []
        # get all lhs actions
        lhs_actions = self.lhs.actions(configuration[0])
        number_of_actions = len(lhs_actions)
        for lhs_a in lhs_actions:
            step, target = self.lhs.execute(lhs_a, configuration[0])
            if target is None:
                number_of_actions -= 1
            rhs_actions = self.rhs.actions(step, configuration[1])
            synchronous_actions.extend(map(
                    lambda ra: (step, ra),
                    rhs_actions
                ))

        if number_of_actions == 0:
            step = (configuration[0], StutteringAction.instance(), configuration[0])
            rhs_actions = self.rhs.actions(step, configuration[1])
            synchronous_actions.extend(map(
                lambda ra: (step, ra),
                rhs_actions
            ))
        return synchronous_actions

    def execute(self, action, configuration):
        step = action[0]
        target = self.rhs.execute(action[1], step, configuration[1])
        return step[2], target
```

<hr>

