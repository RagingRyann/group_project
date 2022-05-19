# Group_Project

# Project Overview:
An analysis of heart disease data from 1988 using four hospital databases: Cleveland, Hungary, Switzerland, and Long Beach V. It contains 76 attributes, including the predicted attribute, but all published experiments refer to a subset of 14 features. The "target" field refers to the presence or absence of heart disease in the patient. 

[link to Tableau dashboard](https://public.tableau.com/shared/QKNKRGSJG?:display_count=n&:origin=viz_share_link)

[link to Google Slides](https://docs.google.com/presentation/d/1ngo6tRvbdELgjAdtwzgYFL6trayqPmxuBI8svCjsym4/edit?usp=sharing)

Dashboard Template:
<img width="1292" alt="Screen Shot 2022-05-17 at 12 35 36 PM" src="https://user-images.githubusercontent.com/93015602/168895752-01a6ef15-62ae-4a43-a472-4aa9e47721c9.png">

## Resources:

* Data Sources: 
    - heart.csv

## Software: 
    - Pandas, PostgreSQL, Tableau
    
## Content:

1. What Topic is Selected: Heart Disease predictability 

2. Why: According to the Centers for Disease Control (CDC), 659,000 people in the United States die from heart disease each year or 1 in every 4 deaths.  Therefore, being able to predict and control these risk factors will help save lives (https://www.cdc.gov/heartdisease/facts.htm#:~:text=One%20person%20dies%20every%2036,United%20States%20from%20cardiovascular%20disease.&text=About%20659%2C000%20people%20in%20the,1%20in%20every%204%20deaths).
3. Description of Data: The Heart.csv provides access to an amalgamation of 4 Databases from Cleveland, Hungary, Switzerland, and Long Beach V with a total of 14 columns (13 columns of risk factors and 1 column of outcome).
4. Questions to answer:
    - What are the major predictors of heart disease?
    - What, if any, are the gender-specific differences?
    - What, if any, risk factors are modifiable?
    - Have risk factors changed over time?

5. Description of data exploration phase: Data was explored using jupyter notebook and pandas; no null values were present; all data points were utilized.

6. Description of the analysis phase: Data was separated into several key areas - Age, Gender, Average values for continuous integer columns, Max / Min values. 

Preliminary ML Model:
- uses logistical regression to predict target accuracy. 
    - Features: Columns 1-13 (ie. Age, Sex, Chest pain, Cholesterol Level, Fasting blood glucose, etc.)
    - Target: Column 14 (ie. Presence of Heart Disease)
    - Why?: Logistical Regression was chosen secondary to the binary outcome of the dataset being used (ie. Presence or Absence of Heart Disease). 

Preliminary Database:
- Uses PostgreSQL database.

Preliminary Technologies:
- Uses Tableau to display information. 

Communication Protocol:
- Email, Text, Slack, Zoom
