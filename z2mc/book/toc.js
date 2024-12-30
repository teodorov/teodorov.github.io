// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="00_foreword.html"><strong aria-hidden="true">1.</strong> Foreword</a></li><li class="chapter-item expanded "><a href="01_traversals.html"><strong aria-hidden="true">2.</strong> Chapter 1: Traversals</a></li><li class="chapter-item expanded "><a href="02_piecewise_relations.html"><strong aria-hidden="true">3.</strong> Chapter 2: Piecewise Relations</a></li><li class="chapter-item expanded "><a href="03_soup_dsl.html"><strong aria-hidden="true">4.</strong> Chapter 3: Soup DSL</a></li><li class="chapter-item expanded "><a href="04_dependent_semantics.html"><strong aria-hidden="true">5.</strong> Chapter 4: Dependent Semantics</a></li><li class="chapter-item expanded "><a href="05_synchronous_composition.html"><strong aria-hidden="true">6.</strong> Chapter 5: Synchronous Composition</a></li><li class="chapter-item expanded "><a href="06_liveness_verification.html"><strong aria-hidden="true">7.</strong> Chapter 6: Liveness Verification</a></li><li class="chapter-item expanded "><a href="07_algorithms_are_dependent.html"><strong aria-hidden="true">8.</strong> Chapter 7: Algorithms are Dependent</a></li><li class="chapter-item expanded "><a href="08_underapproximations.html"><strong aria-hidden="true">9.</strong> Chapter 8: Underapproximations</a></li><li class="chapter-item expanded "><a href="09_conclusion.html"><strong aria-hidden="true">10.</strong> Conclusion</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
