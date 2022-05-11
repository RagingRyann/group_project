# Group_Project

# Project Overview:
An analyis of heart disease data from 1988 using four databases: Cleveland, Hungary, Switzerland, and Long Beach V. It contains 76 attributes, including the predicted attribute, but all published experiments refer to a subset of 14. The "target" field refers to the presence or absence of heart disease in the patient. 

[link to dashboard](link here)

## Resources:

* Data Sources: 
- heart.csv

## Software: 
- Pandas, Postgres, Tableau

1. What Topic Selected: Heart Disease predictability 
2. Why: According to the Centers for Disease Control (CDC), 659,000 people in the United States die from heart disease each year or 1 in every 4 deaths.  Therefore, being able to predict and control these risk factors will help save lives.
3. Description: 4 Databases: Cleveland, Hungary, Switzerland, and Long Beach V with 14 columns of predicting factors. 
4. Questions to answer:
    - What are the major predictors of heart disease?
    - What, if any, are the gender-specific differences?
    - What, if any, risk factors are modifiable?
    - Have risk factors changed over time?


Preliminary ML Model:
- uses logistical regession to predict target accuracy. 
    - Features: Columns 1-13 (ie. Age, Sex, Chest pain, Cholesterol Level, Fasting blood glucose, etc)
    - Target: Column 14 (ie. Presence of Heart Disease)
    - Why?: Logistcal Regression was chosen secondary to the binary outcome of the dataset being used (ie. Presence or absence of Heart Disease). 

Preliminary Database:
- Uses Postgres database.

Preliminary Technologies:
- Uses Tableau to display information. 

Communication Protocol:
- Email, Text, Slack