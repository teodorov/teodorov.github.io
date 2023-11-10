curl "https://api.archives-ouvertes.fr/search/?q=authIdHal_i:9871&wt=bibtex&rows=1000" > _bibliography/papers.bib
sed -i '' 's/forall$min/forall$ min/g' _bibliography/papers.bib