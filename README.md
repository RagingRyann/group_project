# Group_Project

# Project Overview:
An analysis of heart disease data from 1988 using four hospital databases: Cleveland, Hungary, Switzerland, and Long Beach V. It contains 76 attributes, including the predicted attribute, but all published experiments refer to a subset of 14 features. The "target" field refers to the presence or absence of heart disease in the patient. 

[link to dashboard](link here)

## Resources:

* Data Sources: 
    - heart.csv

## Software: 
    - Pandas, Postgres, Tableau
    
## Content:

<<<<<<< HEAD
## Content:

1. What Topic is Selected: Heart Disease predictability 
=======
1. What Topic Selected: Heart Disease Predictability 
<<<<<<< HEAD
>>>>>>> main
2. Why: According to the Centers for Disease Control (CDC), 659,000 people in the United States die from heart disease each year or 1 in every 4 deaths.  Therefore, being able to predict and control these risk factors will help save lives.
3. Description of Data: The Heart.csv provides access to an amalgamation of 4 Databases from Cleveland, Hungary, Switzerland, and Long Beach V with a total of 14 columns (13 columns of risk factors and 1 column of outcome). 
=======
2. Why: According to the Centers for Disease Control (CDC), 659,000 people in the United States die from heart disease each year or 1 in every 4 deaths.  Therefore, being able to predict and control these risk factors will help save lives (https://www.cdc.gov/heartdisease/facts.htm#:~:text=One%20person%20dies%20every%2036,United%20States%20from%20cardiovascular%20disease.&text=About%20659%2C000%20people%20in%20the,1%20in%20every%204%20deaths).
3. Description of Data: The Heart.csv provides access to an amalgamation of 4 Databases from Cleveland, Hungary, Switzerland, and Long Beach V with a total of 14 columns (13 columns of risk factors and 1 column of outcome).
>>>>>>> main
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
- Email, Text, Slack, Zoom
