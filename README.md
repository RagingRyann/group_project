# Group_Project

# Project Overview:
An analysis of heart disease data from 1988 using four hospital databases: Cleveland, Hungary, Switzerland, and Long Beach V. It contains 76 attributes, including the predicted attribute, but all published experiments refer to a subset of 14 features. The "target" field refers to the presence or absence of heart disease in the patient. 

* Outline: 
    - index.html /GitHub Pages: To visualize final dashboard
    - heart_data2_sql.ipynb: To visualize data cleaning and SQL database export
    - heart_ML_LogReg.ipynb, heart_ML_RandomForest.ipynb:  Machine learning models

[link to Tableau dashboard](https://public.tableau.com/shared/QKNKRGSJG?:display_count=n&:origin=viz_share_link)

[link to Google Slides](https://docs.google.com/presentation/d/1ngo6tRvbdELgjAdtwzgYFL6trayqPmxuBI8svCjsym4/edit?usp=sharing)

Dashboard Template:
<img width="1292" alt="Screen Shot 2022-05-17 at 12 35 36 PM" src="https://user-images.githubusercontent.com/93015602/168895752-01a6ef15-62ae-4a43-a472-4aa9e47721c9.png">

## Resources:

* Data Sources: 
    - heart.csv
    - [Link to Kaggle Dataset](https://www.kaggle.com/datasets/johnsmith88/heart-disease-dataset?select=heart.csv)
    - heart_clean.csv (renamed columns to match pgAdmin)

## Software: 

    - Languages: HTML, CSS, JS
    - Pandas, PostgreSQL, Tableau
    
## Content:

1. What Topic is Selected: Heart Disease predictability 

2. Why: According to the Centers for Disease Control (CDC), 659,000 people in the United States die from heart disease each year or 1 in every 4 deaths.  Therefore, being able to predict and control these risk factors will help save lives (https://www.cdc.gov/heartdisease/facts.htm#:~:text=One%20person%20dies%20every%2036,United%20States%20from%20cardiovascular%20disease.&text=About%20659%2C000%20people%20in%20the,1%20in%20every%204%20deaths).
3. Description of Data: The Heart.csv provides access to an amalgamation of 4 Databases from Cleveland, Hungary, Switzerland, and Long Beach V with a total of 14 columns (13 columns of risk factors and 1 column of outcome).

4. Questions to answer:
    - What are the major predictors of heart disease?
    - What, if any, are the gender-specific differences?
    - What, if any, risk factors are modifiable?

5. Description of data exploration phase: Data was explored using jupyter notebook and pandas; no null values were present; all data points were utilized. 

![hd_stats_table](https://user-images.githubusercontent.com/96348953/169701996-b0c8bd06-4017-42ab-9d61-3485d974ce0e.PNG)

6. Description of the analysis phase: Data was separated into several key areas - Age, Gender, Average values for continuous integer columns, Max / Min values (ie. blood pressure and cholesterol).

![chol_curve](https://user-images.githubusercontent.com/96348953/169661380-167cb74c-f819-4fde-95d5-a786bdfc4dde.png)
![thal_value_distrib](https://user-images.githubusercontent.com/96348953/169702042-23ab0418-b4dc-421f-a0b9-f1b8e6384b92.PNG)

7. Preliminary ML Model:
- uses logistical regression to predict target accuracy. 
    - Features: Columns 1-13 (ie. Age, Sex, Chest pain, Cholesterol Level, Fasting blood glucose, etc.)
    - Target: Column 14 (ie. Presence of Heart Disease)
    - Why?: Logistcal Regression was chosen secondary to the binary outcome of the dataset being used (ie. Presence or absence of Heart Disease).
    - Accuracy Outcome: 83%

Secondary ML Model:
- Uses Random Forest to predict target accuracy and determine feature hierarchy importance. 
    - Features: Columns 1-13 (ie. Age, Sex, Chest pain, Cholesterol Level, Fasting blood glucose, etc.)
    - Target: Column 14 (ie. Presence of Heart Disease)
    - Why: RF was used in order to rank features of importance to determine modifiable vs non-modifiable risk factors.
- Accuracy Outcome: 100% (concern for overfitting given accuracy score). 
- Top 3 features: "Chest Pain", "Number of Vessels Occluded", "ST Depression";
- Top Modifiable features: "Cholesterol" and "Blood Pressure" (See Fig ???);

<img width="161" alt="Screen Shot 2022-05-21 at 10 31 07 AM" src="https://user-images.githubusercontent.com/93015602/169662830-e1131d89-496a-4106-890b-21d206532822.png">

Database:
- Uses Postgres database.

- ![image](https://user-images.githubusercontent.com/90944163/169930074-5bb4a4ea-adc1-4cd9-a6ee-f24ace81800d.png)

- ![image](https://user-images.githubusercontent.com/90944163/169930136-9b68c406-3b4b-4929-9614-697e38041565.png)

- ![image](https://user-images.githubusercontent.com/90944163/169930748-47b8fe0b-fab7-4266-8463-70c7728b389d.png)

Technologies:
- Jupyter Notebook / Pandas: Used for data exploration and Machine Learning analysis.
- Postgres / pgAdmin / AWS: Used to host data on server.
- Tableau: Used to display interactive information via data visualizations.

Communication Protocol:
- Technology / Software communication: Heart.csv was read as dataframe into Pandas using Python; ETL was performed and exported to SQL database on AWS; Tableau was utilized to perform data visualizations which were then displayed using JavaScript / HTML / CSS on index.html file. 
- Group communication: Email, Text, Slack, Zoom
