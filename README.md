# india-pin-map

## To Clean up the source data and transform to a json
1. Install Python
2. Prepare a virutal environment using
```
python -m venv .venv
```

3. Activate virtual environment
```
. .venv/bin/activate
```
4. Install pandas
```
pip install pandas
```
5. Install ipykernel for Jupyter notebook to work
```
pip install ipykernel
```


### Data headers
country code      : iso country code, 2 characters
postal code       : varchar(20)
place name        : varchar(180)
admin name1       : 1. order subdivision (state) varchar(100)
admin code1       : 1. order subdivision (state) varchar(20)
admin name2       : 2. order subdivision (county/province) varchar(100)
admin code2       : 2. order subdivision (county/province) varchar(20)
admin name3       : 3. order subdivision (community) varchar(100)
admin code3       : 3. order subdivision (community) varchar(20)
latitude          : estimated latitude (wgs84)
longitude         : estimated longitude (wgs84)
accuracy          : accuracy of lat/lng from 1=estimated to 6=centroid