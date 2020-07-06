import requests 
import json 
import pandas as pd
import csv
import numpy as np
from sklearn.linear_model import LinearRegression
urlcomp = 'https://covid19.mathdro.id/api/daily'  
rcomp = requests.get(urlcomp).json()
x = []
y = []
z = []
for i in range(len(rcomp)):
    x.append([i])
    z.append(rcomp[i]['totalConfirmed'])
    y.append(rcomp[i]["deltaConfirmed"])
model = LinearRegression()
model.fit(x, y)
y_pred = model.predict(x)
y_pred = [int(num) for num in y_pred]
df = pd.DataFrame({'Total Cases':z,'NewCases':y,'Predicted Newcases':y_pred})
df.to_csv('pred.csv', index=False)
