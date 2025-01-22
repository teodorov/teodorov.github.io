bundle install
curl "https://api.archives-ouvertes.fr/search/?q=authIdHal_i:9871&wt=bibtex&rows=1000" > _bibliography/papers.bib
bundle exec jekyll serve