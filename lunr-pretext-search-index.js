var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": ""
},
{
  "id": "frontmatter-4",
  "level": "1",
  "url": "frontmatter-4.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " This is an introductory textbook for statistics, intended for freshman or first-year undergraduate students. Each section begins with understanding the basics of the vocabulary and formulas, a few simple exercises to test your understanding, and followed by a case study illustrating a way to analyze the data with the new content. The goal is to make the textbook interactive so you can test your understanding as the semester progresses. We will be using StatKey as a free online tool for graphing data and creating simulations illustrating …. There is a section explaining how to use R and R Studio for statistical analysis. I tend to save using R until about midpoint in the class, then we can spiral through the content as a review as we learn to use R for the hypothesis testing.  "
},
{
  "id": "frontmatter-5",
  "level": "1",
  "url": "frontmatter-5.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " This book would not exist without the contributions of many collaborators. Thank you for sharing your ideas and research data.  Special thanks to my contributors:  Kathryn Kozak, Coconio Community College, Statistics Using Technology (2018).   Lauryn Benedict, Alexandra Charles, and Amirah Brockington from Biology Sciences at the University of Northern Colorado, and Cristine Dahlin from the University of Pettsburgh, for A survey of vocal mimicry in companion parrots.   Kristin King, Robert Powers, and Sam R at UNC  Oscar Levin and COMat  "
},
{
  "id": "sec-DayOne",
  "level": "1",
  "url": "sec-DayOne.html",
  "type": "Section",
  "number": "1.1",
  "title": "Introduction",
  "body": " Introduction   A review of terminology to understand statistics. We will begin our adventure with who and what the study is about.     At the end of this section you will able to:    Identify the cases and variables in a data set.    Distinguish between a sample and a poplulation.    Classify variables as qualitative or quantitative.      You may ask yourself, what is statistics? Will I ever need it? Statistics is all around us. If you are a sports fan, you have heard phrases like average passing yards in a football game, the proportion of free-throws in basketball, or the batting average in baseball. Around election time you hear about polls predicting the president using terms like margin of error. Environmentalists may gather data on arsenic levels in the water of a town or analyze the increasing global temperatures. These are but a few ways statistics is used.   Statistics is the science of conducting studies to collect, organize, analyze and interpret data.  We are going to use an investigative approach to learning about statistics. We will look at different ways of collecting data (such as with surveys and questionnaires). We will organize the data with graphs and tables so we can see what the data tells us at a glance. We will describe the data with numerical summaries (known as statistics) and word descriptions. Later in the semester we will look at other ways to analyze data, such as finding intervals to predict a typical value and compare whether the sample is similar or different from previously known values. We will also investigate if there is an association between variables.  To begin this journey, let us look at some vocabulary commonly associated with statistics.   A case is the unit of observation, typically a person or object that you are interested in finding information about.    A variable is a characteristic that can assume different values, the measurement or observation about the case.     Data are the values or measurements the variables assume.    For example , what are the majors for the students in your class? The major is the variable since there are multiple responses from the students (such as math major, history major, education, nursing, biology major). Other variables you can ask students in your class are their grade level (freshman, sophomore, junior, senior) and the number of credit hours taken this semester. If we asked the students (each student is a case) in class, there will be lots of different answers for the majors (thus the data).     Checkpoint: Dr. Steve Mackessy has been researching snake venom. Suppose he collects data from a sample of 5 snakes. He measures the length and weight of each snake, identifies the species of snake, and the amount of myotoxin A from its venom, if applicable. Identify the cases and variables in this scenario.    Identify the cases  Which of the following are the cases in this scenario? Select all statements that apply.     The five snakes.    Yes, each snake is a case.      The length and weight of the snakes.    The length and weight are variables.      The amount of myotoxin A.    amount of myotoxin A is a variable.       Identify the variables  Which of the following are the variables in this scenario? Select all statements that apply.     The snakes.    No, each snake is a case.      The length and weight of the snakes.    Yes, the length and weight are variables.      The amount of myotoxin A.    Yes, the amount of myotoxin A is a variable.      The name of the species.    Yes, species is a variable since some may be rattlesnakes and some could be bull snakes.     There are two key terms we use to distinguish the groups we collect data from:   The population is the set of all subjects the study is about.    A sample is a group or subset of subjects selected from the population.   If we asked ALL residents of the state of Colorado where they were born, then the Colorado residents would be the population. But if we asked just some people from a single city in the state of Colorado, they would a sample from the state.   Checkpoint: At the Denver Zoo, every animal gets a yearly checkup. The new veterinarian selects 20 female animals to determine if they are pregnant in the spring.    Identify the population  What is the population?     Every animal at the Denver Zoo.    Yes, every animal makes the population.      The 20 female animals.    No, the 20 female animals is the sample.     There are two main branches of statistics that we are interested in.  In descriptive statistics the statistician tries to describe a situation. It consists of collecting, organizing, summarizing and presenting the data.  While with inferential statistics the statisticians make inferences from samples to make predictions about the population. It consists of generalizing data from samples, performing estimations and hypothesis testing, determining relationships among variables, and making predictions.  We will begin with descriptive statistics since we will summarize the data to make the inferences.   Example: According to the Center for Disease Control and Prevention (CDC) for the week January 9, 2021, there were 25,974 deaths in the United States attributed to COVID. This is descriptive since it is stating the total deaths.   Example: According to a 2023 Pew Research Center study, approximately 32% of Americans have at least one tattoo. This is inferential since the since they are assuming what is true for the population from a sample study. It is unlikey they asked the entire populuation how many tatoos they have.    Identify if each situation is descriptive or inferential statistics:    Identify if descriptive or inferential statistic  It is estimated that about 9% of the people in the United States have green eyes.     inferential statistic.    Yes, they used a sample to predict the population proportion.      descriptive statistic.    Since they are estimating, its inferential. It is unlikey they asked every US citizen their eye color.     Identify if descriptive or inferential statistic  There are 125 women in the US House of Representatives in 2025.     descriptive statistic.    Yes, its a descriptive statistsic.      inferential statistics.    This is descriptive since it is summarizing the actual count.     Identify if descriptive or inferential statistic  In 2025, 26% of the United States Senators are women.     descriptive statistic.    Yes, since 26 of the 100 senators are women, its descriptive.      inferential statistics.    Since 26 of the 100 senators are women, its descriptive.     There are two main types of data we will be working with:   Qualitative variables are when the data are placed into distinct categories. Such as the color of cars found in a parking lot. The car colors can be classified as white, red, blue, black and other colors.   Quantitative variables are numerical and can be ordered. There are two types of quantitative variables. Discrete variables can be counted, such as the number of cars in the different parking lots across campus. The values are whole numbers. Other numerical variables are continuous variables , meaning any value (decimal or fraction) can occur. These are often obtained by measuring something. A continuous variable could be the length of the cars in the parking lot or the time it takes a car to stop when traveling 20 miles per hour. The numerical value can be something besides a whole number.    Identify the type of variable  Identify which variables are qualitative (categorical). Check all that apply.     The size of drinks at a fast-food restaurant as small, medium, or large.    Yes, since categories of small, medium, large.      Classification of children in a daycare center as infant, toddler, or preschooler.    Yes, since categories given.      The weight of the students in class.    Weight will be a number like 150 pounds.     Identify the type of variable  Identify which variables are quantitative (numerical)     The height of players on the UNC basketball team.    Height is quantitative.      The number of free-throws made during a basketball game.    yes, number of free-throws is quantitative.      The type of candy in the vending machine.    Type of candy is categorical.       Classify the quantitative variable  Identify which quantitative variables are discrete.     Number of muffins purchased each day at a local bakery.    Number of muffins is discrete (cannot sell half a muffin).      The quantity of touchdowns during a football game.    Number of touchdowns is discrete.      The weight of the students in class.    Weight is continuous since someone can weigh 150.3 pounds.     Classify the quantitative variable  Identify which quantitative variables are continuous.     The height of the basketball players.    Height is continuous (6.8 feet tall).      Time to complete the 100 meter breaststroke.    Time is continuous.      The weights of newborn infants at local hospital.    Weight is continuous.      Exercise: In 2010, the Pew Research Center questioned 1500 adults in the U.S. to estimate the proportion of the population favoring marijuana use for medical purposes. It was found that 73% are in favor of using marijuana for medical purposes. Identify the case, variable, type of data collected, population, and sample from this scenario.  Vocabulary Identification  Drag the case, variable, population, and sample to the description from the marijuana scenario.    Cases  Each U.S. adult that responded    Variable  The question “should marijuana be used for medical purposes?”    Population  The set of all adults in the U.S    Sample  The 1500 U.S. adults that responded     Measurement Scales   There are four measurement scales for the different types of data that can be collected. Qualitative variables can be organized as nominal or ordinal data while quantitative variables are either interval or ratio data.   Nominal data is organized by its name into mutually exclusive categories. There is no order to the data and one group is not considered better than the others. Examples are gender (classified as male or female), marital status (single, married, widowed, or divorced), and ethnicity are but a few.   Ordinal data is nominal that can be ordered or ranked. Examples are letter grades (A, B, C, D, F) since an A is better than an F, or the winning order in a 100 meter race (1st, 2nd, 3rd place) since they are ranked by the order they cross the finish line (but not the time difference between runners).   Interval data is numerical where you can add\/subtract one value from another but precise differences between units do not exist. Examples are temperature and IQ scores. A true 0 does not exist with interval data. The temperature outside may be 72 degrees Fahrenheit, but 0 degrees does not mean there is no temperature. We also have negative temperature values. IQ scores are an interval measurement since you can miss every question on the assessment yet not score a 0. Thus, a true zero does not exist.   Ratio data is numerical that can be ordered, there exists a true 0 value, and has consistent units. Most measurements will be ratio. Examples of this are height, weight, distance, and time. For ratio data, a value of 0 can mean there is no measurement.   Checkpoint: Classify the type of measurement scale for each variable.  Measurement Scales  Identify the type of measurement scale for student eye colors.     Nominal.    Yes, since each eye color is a category.      Ordinal.    There is no order to eye color.      Interval.    Eye color is not a number.      Ratio.    Eye color is not a number.     Measurement Scales  Identify the type of measurement scale for the time to complete a 5 kilometer race.     Ratio.    Yes, time is numerical with a true zero.      Ordinal.    Time is numerical with a true zero, thus ratio.      Interval.    Time is numerical with a true zero, thus ratio.      Nominal.    Time is numerical with a true zero, thus ratio.     Measurement Scales  Identify the type of measurement scale for the size of pizzas sold at the local pizzeria as small, medium, and large.     Ordinal.    Yes, ordinal since large is bigger.      Ratio.    Ordinal since large is bigger.      Interval.    Ordinal since pizza size is categorical.      Nominal.    Ordinal since pizza size is categorical.     Measurement Scales  Identify the type of measurement scale for ranking of teams for the volleyball championship.     Ordinal.    Yes, ordinal since first place is better.      Ratio.    Ordinal since first place is better.      Interval.    Ordinal since first place is better.      Nominal.    Ordinal since first place is better.     Measurement Scales  Identify the type of measurement scale for the temperature of the oven to bake a Thanksgiving turkey.     Interval.    Yes, temperature is an interval.      Ratio.    temperature is an interval since no true zero.      Ordinal.    temperature is an interval since no true zero.      Nominal.    temperature is numeric.     Measurement Scales  Identify the type of measurement scale for the total passing yards during a football game.     Ratio.    Yes, ratio scale.      Interval.    Ratio since true zero.      Ordinal.    Ratio since true zero.      Nominal.    ratio since number of yards is numeric.     "
},
{
  "id": "sec-DayOne-3",
  "level": "2",
  "url": "sec-DayOne.html#sec-DayOne-3",
  "type": "Objectives",
  "number": "1.1",
  "title": "",
  "body": "  At the end of this section you will able to:    Identify the cases and variables in a data set.    Distinguish between a sample and a poplulation.    Classify variables as qualitative or quantitative.     "
},
{
  "id": "sec-DayOne-5",
  "level": "2",
  "url": "sec-DayOne.html#sec-DayOne-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Statistics "
},
{
  "id": "sec-DayOne-8-1",
  "level": "2",
  "url": "sec-DayOne.html#sec-DayOne-8-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "case "
},
{
  "id": "sec-DayOne-9-1",
  "level": "2",
  "url": "sec-DayOne.html#sec-DayOne-9-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "variable "
},
{
  "id": "sec-DayOne-10-1",
  "level": "2",
  "url": "sec-DayOne.html#sec-DayOne-10-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Data "
},
{
  "id": "Snake-matching",
  "level": "2",
  "url": "sec-DayOne.html#Snake-matching",
  "type": "Checkpoint",
  "number": "1.1.1",
  "title": "Identify the cases.",
  "body": "Identify the cases  Which of the following are the cases in this scenario? Select all statements that apply.     The five snakes.    Yes, each snake is a case.      The length and weight of the snakes.    The length and weight are variables.      The amount of myotoxin A.    amount of myotoxin A is a variable.    "
},
{
  "id": "Snake2-matching",
  "level": "2",
  "url": "sec-DayOne.html#Snake2-matching",
  "type": "Checkpoint",
  "number": "1.1.2",
  "title": "Identify the variables.",
  "body": "Identify the variables  Which of the following are the variables in this scenario? Select all statements that apply.     The snakes.    No, each snake is a case.      The length and weight of the snakes.    Yes, the length and weight are variables.      The amount of myotoxin A.    Yes, the amount of myotoxin A is a variable.      The name of the species.    Yes, species is a variable since some may be rattlesnakes and some could be bull snakes.    "
},
{
  "id": "sec-DayOne-19-1",
  "level": "2",
  "url": "sec-DayOne.html#sec-DayOne-19-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "population "
},
{
  "id": "sec-DayOne-20-1",
  "level": "2",
  "url": "sec-DayOne.html#sec-DayOne-20-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sample "
},
{
  "id": "Pop-matching",
  "level": "2",
  "url": "sec-DayOne.html#Pop-matching",
  "type": "Checkpoint",
  "number": "1.1.3",
  "title": "Identify the population.",
  "body": "Identify the population  What is the population?     Every animal at the Denver Zoo.    Yes, every animal makes the population.      The 20 female animals.    No, the 20 female animals is the sample.    "
},
{
  "id": "sec-DayOne-26",
  "level": "2",
  "url": "sec-DayOne.html#sec-DayOne-26",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "descriptive statistics "
},
{
  "id": "sec-DayOne-27",
  "level": "2",
  "url": "sec-DayOne.html#sec-DayOne-27",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inferential statistics "
},
{
  "id": "Infer-matching",
  "level": "2",
  "url": "sec-DayOne.html#Infer-matching",
  "type": "Checkpoint",
  "number": "1.1.4",
  "title": "Identify if descriptive or inferential statistic.",
  "body": "Identify if descriptive or inferential statistic  It is estimated that about 9% of the people in the United States have green eyes.     inferential statistic.    Yes, they used a sample to predict the population proportion.      descriptive statistic.    Since they are estimating, its inferential. It is unlikey they asked every US citizen their eye color.    "
},
{
  "id": "Desc2-matching",
  "level": "2",
  "url": "sec-DayOne.html#Desc2-matching",
  "type": "Checkpoint",
  "number": "1.1.5",
  "title": "Identify if descriptive or inferential statistic.",
  "body": "Identify if descriptive or inferential statistic  There are 125 women in the US House of Representatives in 2025.     descriptive statistic.    Yes, its a descriptive statistsic.      inferential statistics.    This is descriptive since it is summarizing the actual count.    "
},
{
  "id": "Desc-matching",
  "level": "2",
  "url": "sec-DayOne.html#Desc-matching",
  "type": "Checkpoint",
  "number": "1.1.6",
  "title": "Identify if descriptive or inferential statistic.",
  "body": "Identify if descriptive or inferential statistic  In 2025, 26% of the United States Senators are women.     descriptive statistic.    Yes, since 26 of the 100 senators are women, its descriptive.      inferential statistics.    Since 26 of the 100 senators are women, its descriptive.    "
},
{
  "id": "sec-DayOne-38",
  "level": "2",
  "url": "sec-DayOne.html#sec-DayOne-38",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Qualitative variables "
},
{
  "id": "sec-DayOne-39",
  "level": "2",
  "url": "sec-DayOne.html#sec-DayOne-39",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Quantitative variables Discrete variables continuous variables "
},
{
  "id": "Qual-matching",
  "level": "2",
  "url": "sec-DayOne.html#Qual-matching",
  "type": "Checkpoint",
  "number": "1.1.7",
  "title": "Identify the type of variable.",
  "body": "Identify the type of variable  Identify which variables are qualitative (categorical). Check all that apply.     The size of drinks at a fast-food restaurant as small, medium, or large.    Yes, since categories of small, medium, large.      Classification of children in a daycare center as infant, toddler, or preschooler.    Yes, since categories given.      The weight of the students in class.    Weight will be a number like 150 pounds.    "
},
{
  "id": "Quant-matching",
  "level": "2",
  "url": "sec-DayOne.html#Quant-matching",
  "type": "Checkpoint",
  "number": "1.1.8",
  "title": "Identify the type of variable.",
  "body": "Identify the type of variable  Identify which variables are quantitative (numerical)     The height of players on the UNC basketball team.    Height is quantitative.      The number of free-throws made during a basketball game.    yes, number of free-throws is quantitative.      The type of candy in the vending machine.    Type of candy is categorical.    "
},
{
  "id": "Discrete-matching",
  "level": "2",
  "url": "sec-DayOne.html#Discrete-matching",
  "type": "Checkpoint",
  "number": "1.1.9",
  "title": "Classify the quantitative variable.",
  "body": "Classify the quantitative variable  Identify which quantitative variables are discrete.     Number of muffins purchased each day at a local bakery.    Number of muffins is discrete (cannot sell half a muffin).      The quantity of touchdowns during a football game.    Number of touchdowns is discrete.      The weight of the students in class.    Weight is continuous since someone can weigh 150.3 pounds.    "
},
{
  "id": "ContQN-matching",
  "level": "2",
  "url": "sec-DayOne.html#ContQN-matching",
  "type": "Checkpoint",
  "number": "1.1.10",
  "title": "Classify the quantitative variable.",
  "body": "Classify the quantitative variable  Identify which quantitative variables are continuous.     The height of the basketball players.    Height is continuous (6.8 feet tall).      Time to complete the 100 meter breaststroke.    Time is continuous.      The weights of newborn infants at local hospital.    Weight is continuous.    "
},
{
  "id": "Marijuana-matching",
  "level": "2",
  "url": "sec-DayOne.html#Marijuana-matching",
  "type": "Checkpoint",
  "number": "1.1.11",
  "title": "Vocabulary Identification.",
  "body": "Vocabulary Identification  Drag the case, variable, population, and sample to the description from the marijuana scenario.    Cases  Each U.S. adult that responded    Variable  The question “should marijuana be used for medical purposes?”    Population  The set of all adults in the U.S    Sample  The 1500 U.S. adults that responded   "
},
{
  "id": "sec-DayOne-48",
  "level": "2",
  "url": "sec-DayOne.html#sec-DayOne-48",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Measurement Scales "
},
{
  "id": "sec-DayOne-50",
  "level": "2",
  "url": "sec-DayOne.html#sec-DayOne-50",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Nominal data "
},
{
  "id": "sec-DayOne-51",
  "level": "2",
  "url": "sec-DayOne.html#sec-DayOne-51",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Ordinal "
},
{
  "id": "sec-DayOne-52",
  "level": "2",
  "url": "sec-DayOne.html#sec-DayOne-52",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Interval "
},
{
  "id": "sec-DayOne-53",
  "level": "2",
  "url": "sec-DayOne.html#sec-DayOne-53",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Ratio "
},
{
  "id": "NominalScales-matching",
  "level": "2",
  "url": "sec-DayOne.html#NominalScales-matching",
  "type": "Checkpoint",
  "number": "1.1.12",
  "title": "Measurement Scales.",
  "body": "Measurement Scales  Identify the type of measurement scale for student eye colors.     Nominal.    Yes, since each eye color is a category.      Ordinal.    There is no order to eye color.      Interval.    Eye color is not a number.      Ratio.    Eye color is not a number.    "
},
{
  "id": "RatioScales-matching",
  "level": "2",
  "url": "sec-DayOne.html#RatioScales-matching",
  "type": "Checkpoint",
  "number": "1.1.13",
  "title": "Measurement Scales.",
  "body": "Measurement Scales  Identify the type of measurement scale for the time to complete a 5 kilometer race.     Ratio.    Yes, time is numerical with a true zero.      Ordinal.    Time is numerical with a true zero, thus ratio.      Interval.    Time is numerical with a true zero, thus ratio.      Nominal.    Time is numerical with a true zero, thus ratio.    "
},
{
  "id": "OrdinalScales-matching",
  "level": "2",
  "url": "sec-DayOne.html#OrdinalScales-matching",
  "type": "Checkpoint",
  "number": "1.1.14",
  "title": "Measurement Scales.",
  "body": "Measurement Scales  Identify the type of measurement scale for the size of pizzas sold at the local pizzeria as small, medium, and large.     Ordinal.    Yes, ordinal since large is bigger.      Ratio.    Ordinal since large is bigger.      Interval.    Ordinal since pizza size is categorical.      Nominal.    Ordinal since pizza size is categorical.    "
},
{
  "id": "OrdinalScales2-matching",
  "level": "2",
  "url": "sec-DayOne.html#OrdinalScales2-matching",
  "type": "Checkpoint",
  "number": "1.1.15",
  "title": "Measurement Scales.",
  "body": "Measurement Scales  Identify the type of measurement scale for ranking of teams for the volleyball championship.     Ordinal.    Yes, ordinal since first place is better.      Ratio.    Ordinal since first place is better.      Interval.    Ordinal since first place is better.      Nominal.    Ordinal since first place is better.    "
},
{
  "id": "IntervalScale-matching",
  "level": "2",
  "url": "sec-DayOne.html#IntervalScale-matching",
  "type": "Checkpoint",
  "number": "1.1.16",
  "title": "Measurement Scales.",
  "body": "Measurement Scales  Identify the type of measurement scale for the temperature of the oven to bake a Thanksgiving turkey.     Interval.    Yes, temperature is an interval.      Ratio.    temperature is an interval since no true zero.      Ordinal.    temperature is an interval since no true zero.      Nominal.    temperature is numeric.    "
},
{
  "id": "Ratio2Scale-matching",
  "level": "2",
  "url": "sec-DayOne.html#Ratio2Scale-matching",
  "type": "Checkpoint",
  "number": "1.1.17",
  "title": "Measurement Scales.",
  "body": "Measurement Scales  Identify the type of measurement scale for the total passing yards during a football game.     Ratio.    Yes, ratio scale.      Interval.    Ratio since true zero.      Ordinal.    Ratio since true zero.      Nominal.    ratio since number of yards is numeric.    "
},
{
  "id": "sec-DayTwo",
  "level": "1",
  "url": "sec-DayTwo.html",
  "type": "Section",
  "number": "1.2",
  "title": "Collecting Data",
  "body": " Collecting Data    At the end of this section you will able to:    Simulate several sampling methods.    Recognize the type sampling methods employed in a study.      Recall that the population is the set of all subjects for the study, while a sample is a group or subset selected from the population. It is often difficult or too expensive to examine the whole population for a study, thus we use a sample to help us draw conclusions about the population. When we choose a sample, we want it to be as similar to the population as possible. We are going to simulate several sampling methods using Gettysburg’s Address as the population.  President Abraham Lincoln delivered one of the most famous speeches in United States history at the dedication of the Gettysburg National Cemetery on November 19, 1863. After the featured speaker spoke for two hours, Lincoln delivered his 269-word message in approximately two minutes. Our goal is to estimate the average word length in Abraham Lincoln’s Gettysburg Address by selecting a sample of ten words. The entire text of Lincoln’s Gettysburg Address is given below.   Four score and seven years ago our fathers brought forth, on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal. Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battlefield of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this. But, in a larger sense, we cannot dedicate—we cannot consecrate—we cannot hallow—this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us—that from these honored dead we take increased devotion to that cause for which they here gave the last full measure of devotion—that we here highly resolve that these dead shall not have died in vain—that this nation, under God, shall have a new birth of freedom—and that government of the people, by the people, for the people, shall not perish from the earth.   Step 1: Your task is to select a sample of 10 words to estimate the average length of words in his speech. Pick words that appear to be representative of the population of all the words. If you print the address, you can circle the ten words you choose.  Step 2: Find the lengths (number of letters) for each of the 10 words you selected.  Step 3: Calculate the average number of letters for the 10 words in your sample. Take the total number of letters and divide by the 10 words for the average.   Which best describes your average value for the average word length? Your average word length  Which best describes your average value for the average word length?     Between 3 and 6 letters per word.    That is a reasonable estimate.      Less than 3 letters per word.    This estimate is a bit low, there are a lot of large words not included in your sample.      More than 6 letters per word.    This estimate is a bit high, you likely included a lot of the larger words and did not include some of the smaller words     The image below is a class distribution of the average number of letters for the Gettysburg Address by circling ten words. Each dot represents the average value for a student. There were 64 student samples taken. We can see the values range from 3.4 to 9.4 with the center around 5.5 letters per word, thus this will be our predicted value for the typical word length. But it turns out, we are often biased in the words we select. Some students selected bigger words to be representative, others selected more smaller words. Did you notice how many two and three letter words there were? Were you biased in your sampling selection?   Image of Average Word Length from Gettysburg Address   Shows average word length prediction for 64 students clustered between 5 and 6.    Now let’s investigate using a more random approach in selecting the words for a better estimate of the population average.  Randomly choose ten numbers between 1 and 269 and record them. Find the corresponding word in Lincoln’s Gettysburg Address and find the average word length for your new sample.   Image of Gettysburg Address numbered   Image of Gettysburg Address numbered.    You can also use technology to find the random numbers. Try the link for a random number generator at   Go midway down the page to Numbers and select Integer Generator . Generate 10 random integers between 1 and 269. Click on Get Numbers .   Image RandomOrg menu   image of website menu.    The image below is a sample of ten randomly selected numbers using the applet.   Image Sample of random numbers   lists ten random numbers.    Matching these numbers to the corresponding word in Gettysburg Address gives the average of 3.9 letters per word, which is closer to the population mean of 4.29 letters per word. We will look at the distributions again later.   Sample of Gettysburg Address wods   Image of highlighted words.     Sampling bias occurs when the method of selecting a sample causes the sample to differ from the population in some relevant way. If sampling bias exists, we cannot trust generalizations from the sample to the population. So, we need a better method for predicting the typical or average value.  There are many sampling techniques, we will look at some of the more common sampling methods in statistics. We will simulate some of these methods in class with the Gettysburg Address.   Simple Random Sample is a method in which every element in the population has an equal chance of being selected for the sample. It's like putting all the names of the students in class in a hat and randomly drawing ten names.   Systematic Sampling is a method that useful when the population is already ordered in some way and every kth item is selected. While standing in line at a game, every 10th person gets a 10% off coupon. There is a system in how the sample is collected.   Stratified Sampling occurs when the population is divided into natural groups or strata. People are randomly polled in each group and the number of people polled in each group is determined by the ratio of the group to size of the total population. When sampling for how students study, the sample should consist of some freshman, sophomore, juniors, and seniors. If there are twice as many freshman as seniors, then the sample would also have twice as many freshman.   Cluster Sampling is a method that randomly selects a naturally occurring group or cluster and all in that cluster are selected. This is common in education where all of one class is selected to participate in the study. It is helpful to think of a cluster of grapes: you take the whole cluster rather than just grabbing a couple of grapes.   Convenience Sampling occurs when a group of subjects are convenient to sample. Around election time, people stand outside grocery stores to gather an easy sample of people to ask who they will vote for.   Exercise: Identify the type of sampling method described for each scenario:  Sampling Methods Matching Problem  Match the type of sampling method described with the appropriate scenario. Drag the sampling method name to the description.    Systematic Sampling  Alfred is conducting a survey to determine who students will vote for as their next Student Affairs President. He decided to survey students in a dormitory and knocks on every 10th door    Simple Random Sample  Betty is conducting a survey to determine if students like the new plus\/minus grading system. She randomly draws 100 bear numbers from a list and surveys those students.    Stratified Sampling  Charlotte is conducting a survey to determine if students make use of the campus recreation center. She polls 100 freshman, 100 sophomores, 100 juniors, and 100 seniors on how frequently they use the recreation center.    Cluster Sampling  Eugene is conducting a survey to determine if the dorms should have more study break sessions during finals week. He asks everyone on the 5th floor of Turner their opinion.    Convenience Sampling  Douglas is conducting a survey to determine if the University Center should open up a McDonalds, Wendy’s, or Burger King. He stands outside the UC and surveys students as they enter the building.    "
},
{
  "id": "sec-DayTwo-2",
  "level": "2",
  "url": "sec-DayTwo.html#sec-DayTwo-2",
  "type": "Objectives",
  "number": "1.2",
  "title": "",
  "body": "  At the end of this section you will able to:    Simulate several sampling methods.    Recognize the type sampling methods employed in a study.     "
},
{
  "id": "sec-DayTwo-3",
  "level": "2",
  "url": "sec-DayTwo.html#sec-DayTwo-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "population sample "
},
{
  "id": "GettysCircleWord",
  "level": "2",
  "url": "sec-DayTwo.html#GettysCircleWord",
  "type": "Checkpoint",
  "number": "1.2.1",
  "title": "Your average word length.",
  "body": "Your average word length  Which best describes your average value for the average word length?     Between 3 and 6 letters per word.    That is a reasonable estimate.      Less than 3 letters per word.    This estimate is a bit low, there are a lot of large words not included in your sample.      More than 6 letters per word.    This estimate is a bit high, you likely included a lot of the larger words and did not include some of the smaller words    "
},
{
  "id": "GettysburgCircle",
  "level": "2",
  "url": "sec-DayTwo.html#GettysburgCircle",
  "type": "Figure",
  "number": "1.2.2",
  "title": "",
  "body": " Image of Average Word Length from Gettysburg Address   Shows average word length prediction for 64 students clustered between 5 and 6.   "
},
{
  "id": "GettysAddressNumbers",
  "level": "2",
  "url": "sec-DayTwo.html#GettysAddressNumbers",
  "type": "Figure",
  "number": "1.2.3",
  "title": "",
  "body": " Image of Gettysburg Address numbered   Image of Gettysburg Address numbered.   "
},
{
  "id": "RandomOrg",
  "level": "2",
  "url": "sec-DayTwo.html#RandomOrg",
  "type": "Figure",
  "number": "1.2.4",
  "title": "",
  "body": " Image RandomOrg menu   image of website menu.   "
},
{
  "id": "SampleRandom",
  "level": "2",
  "url": "sec-DayTwo.html#SampleRandom",
  "type": "Figure",
  "number": "1.2.5",
  "title": "",
  "body": " Image Sample of random numbers   lists ten random numbers.   "
},
{
  "id": "GettysWords",
  "level": "2",
  "url": "sec-DayTwo.html#GettysWords",
  "type": "Figure",
  "number": "1.2.6",
  "title": "",
  "body": " Sample of Gettysburg Address wods   Image of highlighted words.   "
},
{
  "id": "sec-DayTwo-23",
  "level": "2",
  "url": "sec-DayTwo.html#sec-DayTwo-23",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Sampling bias "
},
{
  "id": "sec-DayTwo-25",
  "level": "2",
  "url": "sec-DayTwo.html#sec-DayTwo-25",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Simple Random Sample "
},
{
  "id": "sec-DayTwo-26",
  "level": "2",
  "url": "sec-DayTwo.html#sec-DayTwo-26",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Systematic Sampling "
},
{
  "id": "sec-DayTwo-27",
  "level": "2",
  "url": "sec-DayTwo.html#sec-DayTwo-27",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Stratified Sampling "
},
{
  "id": "sec-DayTwo-28",
  "level": "2",
  "url": "sec-DayTwo.html#sec-DayTwo-28",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cluster Sampling "
},
{
  "id": "sec-DayTwo-29",
  "level": "2",
  "url": "sec-DayTwo.html#sec-DayTwo-29",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Convenience Sampling "
},
{
  "id": "Sample-matching",
  "level": "2",
  "url": "sec-DayTwo.html#Sample-matching",
  "type": "Checkpoint",
  "number": "1.2.7",
  "title": "Sampling Methods Matching Problem.",
  "body": "Sampling Methods Matching Problem  Match the type of sampling method described with the appropriate scenario. Drag the sampling method name to the description.    Systematic Sampling  Alfred is conducting a survey to determine who students will vote for as their next Student Affairs President. He decided to survey students in a dormitory and knocks on every 10th door    Simple Random Sample  Betty is conducting a survey to determine if students like the new plus\/minus grading system. She randomly draws 100 bear numbers from a list and surveys those students.    Stratified Sampling  Charlotte is conducting a survey to determine if students make use of the campus recreation center. She polls 100 freshman, 100 sophomores, 100 juniors, and 100 seniors on how frequently they use the recreation center.    Cluster Sampling  Eugene is conducting a survey to determine if the dorms should have more study break sessions during finals week. He asks everyone on the 5th floor of Turner their opinion.    Convenience Sampling  Douglas is conducting a survey to determine if the University Center should open up a McDonalds, Wendy’s, or Burger King. He stands outside the UC and surveys students as they enter the building.   "
},
{
  "id": "sec-DayThree",
  "level": "1",
  "url": "sec-DayThree.html",
  "type": "Section",
  "number": "1.3",
  "title": "Study Types",
  "body": " Study Types    At the end of this section you will able to:     Appropriately identify as an observation or experimental study.    Correctly identify the explanatory and response variables.     Recall there are two main types of studies:   Observational studies where researchers collect data by watching or asking questions, and draw conclusions based on these observations.   Experimental studies where the researcher manipulates a variable to determine how the treatment influences the other variables.    Identify the type of study described  A researcher decided to check the Greeley Police Department records for 2 months to determine what types of crimes were committed.     Observational study    Yes, an observational study because they are looking at the records, not manipulating a variable.      Experimental study    They are not manipulating a variable.     Identify the type of study described  Identify the type of study described: A sample of 50 men with high triglyceride levels were randomly assigned to two groups: consumed 2 tablespoons of oat bran daily for 6 weeks or consumed 2 tablespoons of wheat bran for 6 weeks, to determine which bran worked better to lower their triglyceride levels.     Experimental study    Yes, they are manipulating a variable.      Observational study    Experimental since they are manipulating a variable.     Many observational studies involve surveys and questionnaires, which uses questions to collect the data for the study. Others look at historical records to collect the data. In educational environment, observations of the participants is how the data is collected, by jotting down notes or videotaping the behaviors.  There are three main types of variables we will look at within an experimental study.  The independent variable is the variable that is being manipulated by the researchers. It is also called the explanatory variable.  The dependent variable is the result of manipulation. It is also called the response variable.  A confounding variable is one that influences the dependent variable but cannot be separated from the independent variable.  For this example, identify the variables. A sample of 50 men with high triglyceride levels were randomly assigned to two groups: one consumed 2 tablespoons of oat bran daily for 6 weeks and the other group consumed 2 tablespoons of wheat bran for 6 weeks, to determine which bran worked better to lower their triglyceride levels.    Identify the type of variable  What variable is the type of bran the participants consumed?     independent variable    Yes, because they want to see if the type of bran influences the triglyceride level.      dependent variable    No, the dependent variable is the resulting triglyceride level.      confounding variable    There were no confounding variable listed, but a person’s diet and health may influence the results.       Identify the type of variable  What variable is the triglyceride levels?     dependent variable    Yes, checking to see if triglyceride level changes.      independent variable    No, the independent variable is the type of bran.      confounding variable    There were no confounding variables listed, but the amount of time a person exercises may influence the results.     Type of bran consumed is the independent variable. They want to determine which one works better in lowering the triglyceride levels.  Whether or not the triglyceride level changes is the dependent variable. This is the result of the of manipulating which type of bran they consumed.  In this case, both bran groups were in the treatment group, there was not control group in the study.  There are several possible confounding variables in this study. Things that could influence the triglyceride levels could be diet, amount of exercise, current healthy, and weight of the participants.  There are many ways experimental studies can be conducted. We will look at some of the most common for this course.  In a Randomized Two-treatment Experiment there are typically two treatments and the individuals are randomly placed into the two groups. Either both groups get a treatment, or one group gets a treatment and the other gets either nothing or a placebo. The group getting either no treatment or the placebo is called the control group . The group getting the treatment is called the treatment group . A doctor may be comparing two different diabetes mediations. The subjects are randomly assigned which medication to use for the study.  The purpose of the placebo is that a person thinks they are receiving the treatment, but in reality, they are receiving a sugar pill or fake treatment. Doing this helps to account for the placebo effect , which is where a person thinks their body responds favorable to a treatment because they are in the study even though they are not really taking the treatment. Not every experiment needs a placebo, such as when working using animals, plants, or children. Also, it is not always possible to use a placebo or no treatment. As an example, if you are testing a new blood pressure medication you cannot give a person with high blood pressure a placebo or no treatment because of health or moral reasons.  In a Randomized Block Design a group of subjects (considered the block) that are similar in some aspects are randomly assigned to a treatment. Everyone in that block has the same treatment while everyone in a different block is assigned a different treatment. This is different in that the intact group is given the treatment rather than randomly assigned to a group. An example would be comparing the instructional methods of two different teachers. Each classroom would represent a block; thus, each class receives a different treatment.   Rigorously Controlled Design carefully assign subjects to different treatment groups, so that those given each treatment are similar in ways that are important to the experiment. An example would be if you want to have a full-time student who is male, takes only night classes, has a full-time job, and has children in one treatment group, then you need to have the same type of student getting the other treatment. This type of design is hard to implement since you don't know how many differentiations you would use. This is more common in medicine.  In a Matched Pairs Design the treatments are given to two groups that can be matched up with each other in some ways. One example would be to measure the effectiveness of a muscle relaxer cream on the right arm and the left arm of individuals, and then for each individual you can match up their right arm measurement with their left arm. Another example of this would be before and after measurement during an experiment, such as weight before and weight after a diet regiment.   Other Considerations   There are other things to consider when designing a study.  A Blind study is where the individual does not know which treatment they are getting or if they are getting the treatment or a placebo.   Double-blind study is where neither the individual nor the researcher knows who is getting which treatment or the placebo. This is important so that there can be no bias created by either the individual or the researcher.  Extercsies  Another consideration is the time period the researcher collected the data over. There are three types of time periods to consider.   Cross-sectional study: The data is observed, measured, or collected at one point in time. After completing the Student Orientation, the participants completed a survey answering questions about how the day went and what events were most useful.   Retrospective study: The data is collected from the past using records, old journals, interviews, and other similar artifacts.  A longitudinal study collects data repeatedly from the same subjects over time, often focusing on a smaller group of individuals that are connected by a common trait. Researchers plan to collect data in the future from these groups.   Example: Suppose you want to study the impact that a low-carb diet has on diabetes. First you gather research on prior studies to see what has already been done. This would be a retrospective study. Then you conduct a cross-sectional study with a sample of diabetes patients to see if there are differences in health outcomes like weight or blood sugar in those who follow a low-carb diet. You discover that the diet correlates with weight loss in younger patients, but not older ones. And then you then decide to design a longitudinal study to further examine this link by collecting data over a period of ten years from a sample of younger patients from a specific clinic.  Exerecise  "
},
{
  "id": "sec-DayThree-2",
  "level": "2",
  "url": "sec-DayThree.html#sec-DayThree-2",
  "type": "Objectives",
  "number": "1.3",
  "title": "",
  "body": "  At the end of this section you will able to:     Appropriately identify as an observation or experimental study.    Correctly identify the explanatory and response variables.    "
},
{
  "id": "sec-DayThree-4",
  "level": "2",
  "url": "sec-DayThree.html#sec-DayThree-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Observational studies "
},
{
  "id": "sec-DayThree-5",
  "level": "2",
  "url": "sec-DayThree.html#sec-DayThree-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Experimental studies "
},
{
  "id": "ObsMatching",
  "level": "2",
  "url": "sec-DayThree.html#ObsMatching",
  "type": "Checkpoint",
  "number": "1.3.1",
  "title": "Identify the type of study described.",
  "body": "Identify the type of study described  A researcher decided to check the Greeley Police Department records for 2 months to determine what types of crimes were committed.     Observational study    Yes, an observational study because they are looking at the records, not manipulating a variable.      Experimental study    They are not manipulating a variable.    "
},
{
  "id": "ExpMatching",
  "level": "2",
  "url": "sec-DayThree.html#ExpMatching",
  "type": "Checkpoint",
  "number": "1.3.2",
  "title": "Identify the type of study described.",
  "body": "Identify the type of study described  Identify the type of study described: A sample of 50 men with high triglyceride levels were randomly assigned to two groups: consumed 2 tablespoons of oat bran daily for 6 weeks or consumed 2 tablespoons of wheat bran for 6 weeks, to determine which bran worked better to lower their triglyceride levels.     Experimental study    Yes, they are manipulating a variable.      Observational study    Experimental since they are manipulating a variable.    "
},
{
  "id": "sec-DayThree-11",
  "level": "2",
  "url": "sec-DayThree.html#sec-DayThree-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "independent variable "
},
{
  "id": "sec-DayThree-12",
  "level": "2",
  "url": "sec-DayThree.html#sec-DayThree-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dependent variable "
},
{
  "id": "sec-DayThree-13",
  "level": "2",
  "url": "sec-DayThree.html#sec-DayThree-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "confounding variable "
},
{
  "id": "MatchingIndep",
  "level": "2",
  "url": "sec-DayThree.html#MatchingIndep",
  "type": "Checkpoint",
  "number": "1.3.3",
  "title": "Identify the type of variable.",
  "body": "Identify the type of variable  What variable is the type of bran the participants consumed?     independent variable    Yes, because they want to see if the type of bran influences the triglyceride level.      dependent variable    No, the dependent variable is the resulting triglyceride level.      confounding variable    There were no confounding variable listed, but a person’s diet and health may influence the results.    "
},
{
  "id": "MatchingDep",
  "level": "2",
  "url": "sec-DayThree.html#MatchingDep",
  "type": "Checkpoint",
  "number": "1.3.4",
  "title": "Identify the type of variable.",
  "body": "Identify the type of variable  What variable is the triglyceride levels?     dependent variable    Yes, checking to see if triglyceride level changes.      independent variable    No, the independent variable is the type of bran.      confounding variable    There were no confounding variables listed, but the amount of time a person exercises may influence the results.    "
},
{
  "id": "sec-DayThree-24",
  "level": "2",
  "url": "sec-DayThree.html#sec-DayThree-24",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Randomized Two-treatment Experiment "
},
{
  "id": "sec-DayThree-26",
  "level": "2",
  "url": "sec-DayThree.html#sec-DayThree-26",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Randomized Block Design "
},
{
  "id": "sec-DayThree-27",
  "level": "2",
  "url": "sec-DayThree.html#sec-DayThree-27",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Rigorously Controlled Design "
},
{
  "id": "sec-DayThree-28",
  "level": "2",
  "url": "sec-DayThree.html#sec-DayThree-28",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Matched Pairs Design "
},
{
  "id": "sec-DayThree-29",
  "level": "2",
  "url": "sec-DayThree.html#sec-DayThree-29",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Other Considerations "
},
{
  "id": "sec-DayThree-31",
  "level": "2",
  "url": "sec-DayThree.html#sec-DayThree-31",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Blind study "
},
{
  "id": "sec-DayThree-32",
  "level": "2",
  "url": "sec-DayThree.html#sec-DayThree-32",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Double-blind study "
},
{
  "id": "sec-DayThree-35",
  "level": "2",
  "url": "sec-DayThree.html#sec-DayThree-35",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cross-sectional study: "
},
{
  "id": "sec-DayThree-36",
  "level": "2",
  "url": "sec-DayThree.html#sec-DayThree-36",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Retrospective study: "
},
{
  "id": "sec-DayThree-37",
  "level": "2",
  "url": "sec-DayThree.html#sec-DayThree-37",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "longitudinal study "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.4",
  "title": "Case Studies",
  "body": " Case Studies  This section introduces you to several case study scenarios. Throughout the semester we will refer to one of these studies. Several are based on class surveys from prior semesters and are the foundation for the examples throughout the text. We will learn different ways to analyze data through these case studies.   The full data sets are listed in the Data Sets Chapter. We will often use just a subset of the whole data file as we are learning the concepts.    Case Study - Class Survey 1  In the spring semester, a section of UNC students taking an introductory statistics course completed a survey on the first day of class identifying their eye color, current weight, shoe size, height, and the number of siblings they have. The survey was completed through Canvas, so responses were anonymous. Below is a screenshot of the first seven rows. Identify the following using the first day class survey.   image of cases and variable for survey 1    Cases   What are the cases in the survey?    Each student that responded is a case (the rows in the table).     Variables   How many variables are in the survey?    There are 5 variables, these are the columns for eye color, siblings, weights, height, and shoe size.     Qualitative Variables   Which variables are qualitative in the survey?    Eye color is the only categorial variable in the survey     Discrete Quantitative Variables   Identify the discrete quantitative variable(s) in the survey.    The number of siblings are counts thus discrete.     Continuous Quantitative Variables   Identify the continuous quantitative variable(s) in the survey.    The weights and heights are continuous measurements. Shoe sizes are unique since they occur in jumps of 1\/2 size.     Study Type   What type of study was conducted?    This is an observational study since no variable was manipulated.     Sample Size   How big is the sample based on the screenshot?    The screenshot shows 7 students for the sample. The data file shows 42 students who participated in the survey.     Population   Who is the population?    We can generalize the population to all UNC students.     Sampling Method   Which sampling method best describes how the data was collected?    Cluster sampling since one intact group was surveyed.      Case Study – Class Survey 2  In the Spring semester of 2025, UNC students proposed some questions for the class survey identifying their favorite season (spring, summer, fall, winter), how they preferred the steak being cooked (as rare, medium, medium well, well done), movie genre preference, and favorite vacation location (as coastal, mountain, theme park, city\/cultural exploration, or a staycation). Students also identified how many tattoos they have, the number of credit hours they were taking this semester, the number of pets they currently have, and how many hours they typically sleep per night. Use the screen shot of the first seven rows to answer the following questions.   image of cases and variable for survey 2    Cases 2   What are the cases in the survey?    Each student that responded is a case. (rows in table)     Variables 2   How many variables are in the survey?    There are 8 variables, these are the columns.     Qualitative Variables 2   Which variables are qualitative in the survey?    Favorite season, steak cooked, movie preference, and vacation location are all categorial variables in this survey     Discrete Quantitative Variables 2   Identify the discrete quantitative variable(s) in the survey.    The number of tattoos, credits hours, and pets are the discrete variables.     Continuous Quantitative Variables 2   Identify the continuous quantitative variable(s) in the survey.    Sleep is a continuous measurement.     Study Type 2   What type of study was conducted?    This is an observational study since no variable was manipulated.     Sample   How big is the sample based on the screenshot?    The screenshot shows 7 students for the sample. The data file shows 43 students who participated in the survey.     Population   Who is the population?    We can generalize the population to all UNC students.     Sampling Method   Which sampling method best describes how the data was collected?    Cluster sampling since one intact group was surveyed.      Case Study – Florida Bass  Largemouth bass were studied in 53 different Florida lakes to examine the factors that influence the level of mercury contamination. Water samples were collected from the surface of the middle of each lake in August 1990 and then again in March 1991. The pH level, the amount of chlorophyll, calcium, and alkalinity were measured in each sample. Use the screenshot of the first six rows to answer the following questions.  Original data source: Florida Bass.    image of variables for Florida lakes    Variables   How many variables are in the screenshot?    There are 8 variables with measurements. The ID and Lake name are identifiers only.     Qualitative Variables   Which variables are qualitative?    None     Discrete Quantitative Variables   Identify the discrete quantitative variable(s).    Number of samples collected from the lake.     Continuous Quantitative Variables   Identify the continuous quantitative variable(s).    Alkalinity, pH, Calcium, Chlorophyll, Mercury .     Study Type   What type of study was conducted?    This is an observational study since no variable was manipulated. They recorded the measurements as present in the lakes.     Sample   How big is the sample based on the description?    The description states 53 lakes were sampled.     Population   What is the population?    All Florida lakes.      Case Study – Vocal Mimicry of Parrots  Parrots are one of the rare animal taxa with life-long vocal learning. Parrot vocal repertoires are difficult to study in the wild, but companion parrots offer a valuable data source. The authors surveyed the public about mimicry repertoires in companion parrots to determine whether vocal learning varied by (1) species, (2) sex, (3) age, and (4) social interaction with other parrots. Species differed significantly in mimicry ability, with grey parrots having the largest mimicry repertoires. Analyses of all birds (n = 877) found no overarching effects of sex, age, or parrot-parrot social interactions on mimicry repertoires. Authors: Lauryn Benedict, Alexandra Charles , Amirah Brockington and Christine R Dahlin.  A survey of vocal mimicry in companion parrots: Article.   Full data set: Parrots Data.    image of variable for parrot data    Variables   How many variables are in the screenshot?    There are 9 variables with measurements. The Ref ID is an identifier only.     Qualitative Variables   Which variables are qualitative?    Genus, Species, sex, social with other parrots, and social with conspecifics     Discrete Quantitative Variables   Identify the discrete quantitative variable(s).    Age, mimicry sounds counts, phrase counts, and word counts.     Continuous Quantitative Variables   Identify the continuous quantitative variable(s).    none in this data set shown     Study Type   What type of study was conducted?    This is an observational study since no variable was manipulated. They gathered data from a questionnaire.     Sample   How big is the sample based on the description?    The description states 877 birds were in the study.       use for less than and for greater than symbols for R coding  "
},
{
  "id": "sec-section-name-3",
  "level": "2",
  "url": "sec-section-name.html#sec-section-name-3",
  "type": "Note",
  "number": "1.4.1",
  "title": "",
  "body": " The full data sets are listed in the Data Sets Chapter. We will often use just a subset of the whole data file as we are learning the concepts.  "
},
{
  "id": "subsec-Survey1-4",
  "level": "2",
  "url": "sec-section-name.html#subsec-Survey1-4",
  "type": "Example",
  "number": "1.4.2",
  "title": "Cases.",
  "body": " Cases   What are the cases in the survey?    Each student that responded is a case (the rows in the table).   "
},
{
  "id": "subsec-Survey1-5",
  "level": "2",
  "url": "sec-section-name.html#subsec-Survey1-5",
  "type": "Example",
  "number": "1.4.3",
  "title": "Variables.",
  "body": " Variables   How many variables are in the survey?    There are 5 variables, these are the columns for eye color, siblings, weights, height, and shoe size.   "
},
{
  "id": "subsec-Survey1-6",
  "level": "2",
  "url": "sec-section-name.html#subsec-Survey1-6",
  "type": "Example",
  "number": "1.4.4",
  "title": "Qualitative Variables.",
  "body": " Qualitative Variables   Which variables are qualitative in the survey?    Eye color is the only categorial variable in the survey   "
},
{
  "id": "subsec-Survey1-7",
  "level": "2",
  "url": "sec-section-name.html#subsec-Survey1-7",
  "type": "Example",
  "number": "1.4.5",
  "title": "Discrete Quantitative Variables.",
  "body": " Discrete Quantitative Variables   Identify the discrete quantitative variable(s) in the survey.    The number of siblings are counts thus discrete.   "
},
{
  "id": "subsec-Survey1-8",
  "level": "2",
  "url": "sec-section-name.html#subsec-Survey1-8",
  "type": "Example",
  "number": "1.4.6",
  "title": "Continuous Quantitative Variables.",
  "body": " Continuous Quantitative Variables   Identify the continuous quantitative variable(s) in the survey.    The weights and heights are continuous measurements. Shoe sizes are unique since they occur in jumps of 1\/2 size.   "
},
{
  "id": "subsec-Survey1-9",
  "level": "2",
  "url": "sec-section-name.html#subsec-Survey1-9",
  "type": "Example",
  "number": "1.4.7",
  "title": "Study Type.",
  "body": " Study Type   What type of study was conducted?    This is an observational study since no variable was manipulated.   "
},
{
  "id": "subsec-Survey1-10",
  "level": "2",
  "url": "sec-section-name.html#subsec-Survey1-10",
  "type": "Example",
  "number": "1.4.8",
  "title": "Sample Size.",
  "body": " Sample Size   How big is the sample based on the screenshot?    The screenshot shows 7 students for the sample. The data file shows 42 students who participated in the survey.   "
},
{
  "id": "subsec-Survey1-11",
  "level": "2",
  "url": "sec-section-name.html#subsec-Survey1-11",
  "type": "Example",
  "number": "1.4.9",
  "title": "Population.",
  "body": " Population   Who is the population?    We can generalize the population to all UNC students.   "
},
{
  "id": "subsec-Survey1-12",
  "level": "2",
  "url": "sec-section-name.html#subsec-Survey1-12",
  "type": "Example",
  "number": "1.4.10",
  "title": "Sampling Method.",
  "body": " Sampling Method   Which sampling method best describes how the data was collected?    Cluster sampling since one intact group was surveyed.   "
},
{
  "id": "subsec-Survey2-4",
  "level": "2",
  "url": "sec-section-name.html#subsec-Survey2-4",
  "type": "Example",
  "number": "1.4.11",
  "title": "Cases 2.",
  "body": " Cases 2   What are the cases in the survey?    Each student that responded is a case. (rows in table)   "
},
{
  "id": "subsec-Survey2-5",
  "level": "2",
  "url": "sec-section-name.html#subsec-Survey2-5",
  "type": "Example",
  "number": "1.4.12",
  "title": "Variables 2.",
  "body": " Variables 2   How many variables are in the survey?    There are 8 variables, these are the columns.   "
},
{
  "id": "subsec-Survey2-6",
  "level": "2",
  "url": "sec-section-name.html#subsec-Survey2-6",
  "type": "Example",
  "number": "1.4.13",
  "title": "Qualitative Variables 2.",
  "body": " Qualitative Variables 2   Which variables are qualitative in the survey?    Favorite season, steak cooked, movie preference, and vacation location are all categorial variables in this survey   "
},
{
  "id": "subsec-Survey2-7",
  "level": "2",
  "url": "sec-section-name.html#subsec-Survey2-7",
  "type": "Example",
  "number": "1.4.14",
  "title": "Discrete Quantitative Variables 2.",
  "body": " Discrete Quantitative Variables 2   Identify the discrete quantitative variable(s) in the survey.    The number of tattoos, credits hours, and pets are the discrete variables.   "
},
{
  "id": "subsec-Survey2-8",
  "level": "2",
  "url": "sec-section-name.html#subsec-Survey2-8",
  "type": "Example",
  "number": "1.4.15",
  "title": "Continuous Quantitative Variables 2.",
  "body": " Continuous Quantitative Variables 2   Identify the continuous quantitative variable(s) in the survey.    Sleep is a continuous measurement.   "
},
{
  "id": "subsec-Survey2-9",
  "level": "2",
  "url": "sec-section-name.html#subsec-Survey2-9",
  "type": "Example",
  "number": "1.4.16",
  "title": "Study Type 2.",
  "body": " Study Type 2   What type of study was conducted?    This is an observational study since no variable was manipulated.   "
},
{
  "id": "subsec-Survey2-10",
  "level": "2",
  "url": "sec-section-name.html#subsec-Survey2-10",
  "type": "Example",
  "number": "1.4.17",
  "title": "Sample.",
  "body": " Sample   How big is the sample based on the screenshot?    The screenshot shows 7 students for the sample. The data file shows 43 students who participated in the survey.   "
},
{
  "id": "subsec-Survey2-11",
  "level": "2",
  "url": "sec-section-name.html#subsec-Survey2-11",
  "type": "Example",
  "number": "1.4.18",
  "title": "Population.",
  "body": " Population   Who is the population?    We can generalize the population to all UNC students.   "
},
{
  "id": "subsec-Survey2-12",
  "level": "2",
  "url": "sec-section-name.html#subsec-Survey2-12",
  "type": "Example",
  "number": "1.4.19",
  "title": "Sampling Method.",
  "body": " Sampling Method   Which sampling method best describes how the data was collected?    Cluster sampling since one intact group was surveyed.   "
},
{
  "id": "subsec-Florida-5",
  "level": "2",
  "url": "sec-section-name.html#subsec-Florida-5",
  "type": "Example",
  "number": "1.4.20",
  "title": "Variables.",
  "body": " Variables   How many variables are in the screenshot?    There are 8 variables with measurements. The ID and Lake name are identifiers only.   "
},
{
  "id": "subsec-Florida-6",
  "level": "2",
  "url": "sec-section-name.html#subsec-Florida-6",
  "type": "Example",
  "number": "1.4.21",
  "title": "Qualitative Variables.",
  "body": " Qualitative Variables   Which variables are qualitative?    None   "
},
{
  "id": "subsec-Florida-7",
  "level": "2",
  "url": "sec-section-name.html#subsec-Florida-7",
  "type": "Example",
  "number": "1.4.22",
  "title": "Discrete Quantitative Variables.",
  "body": " Discrete Quantitative Variables   Identify the discrete quantitative variable(s).    Number of samples collected from the lake.   "
},
{
  "id": "subsec-Florida-8",
  "level": "2",
  "url": "sec-section-name.html#subsec-Florida-8",
  "type": "Example",
  "number": "1.4.23",
  "title": "Continuous Quantitative Variables.",
  "body": " Continuous Quantitative Variables   Identify the continuous quantitative variable(s).    Alkalinity, pH, Calcium, Chlorophyll, Mercury .   "
},
{
  "id": "subsec-Florida-9",
  "level": "2",
  "url": "sec-section-name.html#subsec-Florida-9",
  "type": "Example",
  "number": "1.4.24",
  "title": "Study Type.",
  "body": " Study Type   What type of study was conducted?    This is an observational study since no variable was manipulated. They recorded the measurements as present in the lakes.   "
},
{
  "id": "subsec-Florida-10",
  "level": "2",
  "url": "sec-section-name.html#subsec-Florida-10",
  "type": "Example",
  "number": "1.4.25",
  "title": "Sample.",
  "body": " Sample   How big is the sample based on the description?    The description states 53 lakes were sampled.   "
},
{
  "id": "subsec-Florida-11",
  "level": "2",
  "url": "sec-section-name.html#subsec-Florida-11",
  "type": "Example",
  "number": "1.4.26",
  "title": "Population.",
  "body": " Population   What is the population?    All Florida lakes.   "
},
{
  "id": "subsec-BirdVocals-6",
  "level": "2",
  "url": "sec-section-name.html#subsec-BirdVocals-6",
  "type": "Example",
  "number": "1.4.27",
  "title": "Variables.",
  "body": " Variables   How many variables are in the screenshot?    There are 9 variables with measurements. The Ref ID is an identifier only.   "
},
{
  "id": "subsec-BirdVocals-7",
  "level": "2",
  "url": "sec-section-name.html#subsec-BirdVocals-7",
  "type": "Example",
  "number": "1.4.28",
  "title": "Qualitative Variables.",
  "body": " Qualitative Variables   Which variables are qualitative?    Genus, Species, sex, social with other parrots, and social with conspecifics   "
},
{
  "id": "subsec-BirdVocals-8",
  "level": "2",
  "url": "sec-section-name.html#subsec-BirdVocals-8",
  "type": "Example",
  "number": "1.4.29",
  "title": "Discrete Quantitative Variables.",
  "body": " Discrete Quantitative Variables   Identify the discrete quantitative variable(s).    Age, mimicry sounds counts, phrase counts, and word counts.   "
},
{
  "id": "subsec-BirdVocals-9",
  "level": "2",
  "url": "sec-section-name.html#subsec-BirdVocals-9",
  "type": "Example",
  "number": "1.4.30",
  "title": "Continuous Quantitative Variables.",
  "body": " Continuous Quantitative Variables   Identify the continuous quantitative variable(s).    none in this data set shown   "
},
{
  "id": "subsec-BirdVocals-10",
  "level": "2",
  "url": "sec-section-name.html#subsec-BirdVocals-10",
  "type": "Example",
  "number": "1.4.31",
  "title": "Study Type.",
  "body": " Study Type   What type of study was conducted?    This is an observational study since no variable was manipulated. They gathered data from a questionnaire.   "
},
{
  "id": "subsec-BirdVocals-11",
  "level": "2",
  "url": "sec-section-name.html#subsec-BirdVocals-11",
  "type": "Example",
  "number": "1.4.32",
  "title": "Sample.",
  "body": " Sample   How big is the sample based on the description?    The description states 877 birds were in the study.   "
},
{
  "id": "sec-CatData",
  "level": "1",
  "url": "sec-CatData.html",
  "type": "Section",
  "number": "2.1",
  "title": "Graphing Categorical Data",
  "body": " Graphing Categorical Data    At the end of this section you will able to     Organize categorical data into a frequency table.    Graph categorical data with bar graph or pie graph.    Accurately describe the data with proportions.     Once a researcher has gathered the data for a particular variable, they need a way to summarize the data in a meaningful way. Generally, the first step is organizing the data and then presenting the data in graphs and charts. A convenient method is organizing the data in a frequency distribution. With categorical data, the frequency represents the number of times a particular category occurs from the raw data. This is organized in a frequency table summarizing each category with its frequency. This works best with nominal and ordinal level data.  On the first day of class, students respond to the Class Survey by identifying their eye color. In the sample of 20 students below, construct a frequency table to summarize the data.   Image of Raw Eye Color Data   Lists 20 eye colors.    The data is organized into 4 distinct categories. With this smaller data set we can count how many have brown eyes, how many have blue eyes, then green and hazel. With a larger data set we will use technology to help us find the frequency. From this sample there are 10 with brown eyes, 4 have blue eyes, 4 have green eyes, and 2 have hazel eyes. If we add the counts together, we get our sample of 20 students.   Image of Eye Frequency   Frequency of 10 brown, 4 blue, 4 green, and 2 hazel.    Once we have the tallies, we can graph the data as a bar graph or bar chart. We typically list the categories along the horizontal x-axis and the frequencies vertically along the y-axis, as shown below. The height of each bar represents the frequency for that category.   Image of Eye Bar Graph   Bar graph showing of 10 brown, 4blue, 4 green, and 2 hazel.    The bar graph allows us to quickly see that brown occurs most often and hazel eyes occurred least often in this sample.  A relative frequency table also shows the proportion or percentage of cases that fall in each category, as shown below.   Image of Eye Relative Frequency Table   Relative frequency table showing of 50% brown, 20% blue, 20% green, and 10% hazel.    The proportion of some category is found by     Brown eyes occurred 10 times out of the sample of 20 students thus which is 50% of the students. Blue eyes occurred 4 times out of the sample of 20 students thus which is 20% of the students.  The proportion for a sample is denoted and read \"p-hat.\"  The proportion for a population is denoted p .  Categorical data can also be graphed as pie graph or circle chart. The graph typically includes the percentage for each of the categories. Pie graphs are useful for comparing the size of the categories. We can see that brown eyes occured most often at 50% for this sample.   Circle Graph of Eye Color   Graph showing of 50% brown, 20% blue, 20% green, and 10% hazel.    A third type of qualitative data graph is a Pareto chart , which is just a bar chart with the bars sorted with the highest frequencies on the left and the smallest frequencies on the right. The advantace is you can visually see the more popular responses to the least popular.    Image of Pareto Chart   Pareto Chart showing of 10 brown, 4 blue, 4 green, and 2 hazel.     See the section for Graphing with StatKey for graphing one categorical variable with technology.     Two Categorical Variables   When working with two categorical variables, we often look for possible relationships between the two variables using a two-way table . The categories for one variable are listed down the side (rows) and the categories for the second variable are listed across the top (columns). Each cell of the table contains the count for the number of data cases that are in both categories.  We are going to investigate the possible relationship using the UNC Women's basketball data set. The dataset 22-23 UNCWBB gives the results of the UNC Women's Basketball team for the 31 games played during the 2022-2023 season. Two variables measured within that dataset were Win Loss variable which stated if the UNC team won or lost the game and the HomeAway variable which indicates whether that game was a home game or an away game. The image below is a screen shot of the first nine games from the data set .   Image of partial data set   Lists 9 games as home\/awa and win\/loss.    The results for these variables are shown in the two-way table below. To create the table, in StatKey choose Two Categorical Variables along the left menu and select the variable WinLoss and HomeAway for the table.   Image of WB two-way table   Summarizes value for 31 games.    From the table we can see there were a total of 31 games, 15 of the games were home and 16 games were away. UNC won 13 games and lost 18 games total. They won 8 of the home games and lost 7 at home. They won 5 away games and lost 11 away games.  As a review, is the study an experiment or an observational study?   Solution: This is an observational study since we are looking at recorded data, there was no manipulation of variables.  What proportion of games did the UNC Women's Basketball team win during the 2022-2023 season?   Solution: p(win) = 13\/31 = 0.419 so 42% of the games.  What proportion of games did the UNC Women's Basketball team play at Away during the 2022-2023 season?  Solution: p(away) = 16\/31 = .516 so 51.6% of the games.  Does the UNC Women’s Basketball team have a greater success rate, meaning they win more often, at home games as compared to away games?   Solution: P (win at home) = 8\/15 = .533 = 53.3%   Solution: P (win at away) = 5\/16 = 0.3125 = 31.3%  So it does appear they win more at home.     Side by side bar graph compares the categories next to each other one of the variables. The height of each bar is the number of the corresponding cell in the two-way table.   Segmented bar graph is like a side-by-side bar chart, but the bars are stacked instead of side-by-side. This helps to see the total for each variable across the categories.  The segmented bar graph below list the home and away games along the horizontal axis. The colors represent wins in brown and losses in blue. The heights tell us there were 15 home games an 16 away games. From the graph it shows there were more losses Away since the blue section is larger. UNC had more wins at Home since the brown section is larger for the home games.   Image of WB home and away   Segment bar graph comparing home and away wins.    If we switch the variables on the axes, we have the segmented bar graph below. It is easy to see there were more losses for the season.   Image of WB wins and losses   Segment bar graph comparing wins and losses.    See the section Graphing with StatKey for more information on graphing two categorical variables with technology.  "
},
{
  "id": "sec-CatData-2",
  "level": "2",
  "url": "sec-CatData.html#sec-CatData-2",
  "type": "Objectives",
  "number": "2.1",
  "title": "",
  "body": "  At the end of this section you will able to     Organize categorical data into a frequency table.    Graph categorical data with bar graph or pie graph.    Accurately describe the data with proportions.    "
},
{
  "id": "sec-CatData-3",
  "level": "2",
  "url": "sec-CatData.html#sec-CatData-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "frequency frequency table "
},
{
  "id": "EyeRaw",
  "level": "2",
  "url": "sec-CatData.html#EyeRaw",
  "type": "Figure",
  "number": "2.1.1",
  "title": "",
  "body": " Image of Raw Eye Color Data   Lists 20 eye colors.   "
},
{
  "id": "EyeFreq",
  "level": "2",
  "url": "sec-CatData.html#EyeFreq",
  "type": "Figure",
  "number": "2.1.2",
  "title": "",
  "body": " Image of Eye Frequency   Frequency of 10 brown, 4 blue, 4 green, and 2 hazel.   "
},
{
  "id": "sec-CatData-8",
  "level": "2",
  "url": "sec-CatData.html#sec-CatData-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bar graph "
},
{
  "id": "EyeBar",
  "level": "2",
  "url": "sec-CatData.html#EyeBar",
  "type": "Figure",
  "number": "2.1.3",
  "title": "",
  "body": " Image of Eye Bar Graph   Bar graph showing of 10 brown, 4blue, 4 green, and 2 hazel.   "
},
{
  "id": "sec-CatData-11",
  "level": "2",
  "url": "sec-CatData.html#sec-CatData-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "relative frequency table "
},
{
  "id": "EyeRelFreq",
  "level": "2",
  "url": "sec-CatData.html#EyeRelFreq",
  "type": "Figure",
  "number": "2.1.4",
  "title": "",
  "body": " Image of Eye Relative Frequency Table   Relative frequency table showing of 50% brown, 20% blue, 20% green, and 10% hazel.   "
},
{
  "id": "sec-CatData-18",
  "level": "2",
  "url": "sec-CatData.html#sec-CatData-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "pie graph "
},
{
  "id": "EyeCircle",
  "level": "2",
  "url": "sec-CatData.html#EyeCircle",
  "type": "Figure",
  "number": "2.1.5",
  "title": "",
  "body": " Circle Graph of Eye Color   Graph showing of 50% brown, 20% blue, 20% green, and 10% hazel.   "
},
{
  "id": "sec-CatData-20",
  "level": "2",
  "url": "sec-CatData.html#sec-CatData-20",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Pareto chart "
},
{
  "id": "sec-CatData-25",
  "level": "2",
  "url": "sec-CatData.html#sec-CatData-25",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Graphing with StatKey "
},
{
  "id": "sec-CatData-28",
  "level": "2",
  "url": "sec-CatData.html#sec-CatData-28",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "two-way table "
},
{
  "id": "sec-CatData-29",
  "level": "2",
  "url": "sec-CatData.html#sec-CatData-29",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "22-23 UNCWBB "
},
{
  "id": "WBdata",
  "level": "2",
  "url": "sec-CatData.html#WBdata",
  "type": "Figure",
  "number": "2.1.6",
  "title": "",
  "body": " Image of partial data set   Lists 9 games as home\/awa and win\/loss.   "
},
{
  "id": "sec-CatData-31",
  "level": "2",
  "url": "sec-CatData.html#sec-CatData-31",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Two Categorical Variables "
},
{
  "id": "WBtwoWayTable",
  "level": "2",
  "url": "sec-CatData.html#WBtwoWayTable",
  "type": "Figure",
  "number": "2.1.7",
  "title": "",
  "body": " Image of WB two-way table   Summarizes value for 31 games.   "
},
{
  "id": "sec-CatData-45",
  "level": "2",
  "url": "sec-CatData.html#sec-CatData-45",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Side by side bar graph "
},
{
  "id": "sec-CatData-46",
  "level": "2",
  "url": "sec-CatData.html#sec-CatData-46",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Segmented bar graph "
},
{
  "id": "WBgraph",
  "level": "2",
  "url": "sec-CatData.html#WBgraph",
  "type": "Figure",
  "number": "2.1.8",
  "title": "",
  "body": " Image of WB home and away   Segment bar graph comparing home and away wins.   "
},
{
  "id": "WBwins",
  "level": "2",
  "url": "sec-CatData.html#WBwins",
  "type": "Figure",
  "number": "2.1.9",
  "title": "",
  "body": " Image of WB wins and losses   Segment bar graph comparing wins and losses.   "
},
{
  "id": "sec-CatData-51",
  "level": "2",
  "url": "sec-CatData.html#sec-CatData-51",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Graphing with StatKey "
},
{
  "id": "sec-QuantData",
  "level": "1",
  "url": "sec-QuantData.html",
  "type": "Section",
  "number": "2.2",
  "title": "Graphing Quantitative Data",
  "body": " Graphing Quantitative Data    At the end of this section you will able to     Graph quantitative data with dotplots, boxplots, and histograms.    Describe the shape of a data.    Describe the relationship from scatterplots.    Interpret graphs.     In this course we will use technology to graph quantitative data. So our focus will be on interpreting the information from the graph. The three graphs we will use the most are dotplots, boxplots, and histograms.   Graphing One Quantitative Variable  A dotplot is a graph where the values are listed along the x-axis and each dot represents the case. The total number of dots represents the sample size. The graph below illustrates the number of tattoos for each student from a sample of 43 students.   image of number of tattoos    Interpret Dotplot: From the dotplot we can see there are 43 dots for the sample of 43 students. Clearly 0 tattoos occur most often (26 students). There are 7 students with 1 tattoo, one student with 2 tattoos, one student with 3 tattoos, four students with 4 tattoos, two students with 5 tattoos. There is one student with 10 and one student with 12 tattoos. The data is from Survey 2  A histogram is similar to a bar graph, except we generally have continuous data thus the bars touch. We can adjust the width of the bar to create an interval of values, and the frequency of cases that fall in that interval are shown on the y-axis. Histograms are helpful to describe the shape of the distribution.   histogram of student weights    Interpret Histogram: The histogram created by StatKey shows the weights, in pounds, from a sample of 42 students. The lightest student weight is 115 pounds while the largest weight is 303 pounds. Most students are between 125 and 225 pounds. The width of each interval is 25 pounds creating 9 subdivisions. There are 12 students whose weights are between 150 and 175 pounds. The mean weight is 171.1 pounds. Data found in Survey1.  A boxplot splits the data into four sections with the same number of cases in each region. This helps to see the spread of the values. Boxplot are also known as box-and-whisker plots because the box represents the middle 50% of the data and there is a whisker to the smallest value and a whisker to the largest value.   boxplot of student weights    Interpret Boxplot: The boxplot created by StatKey shows the weights, in pounds, from a sample of 42 students. The minimum student weight is 115 pounds while the maximum weight is 303 pounds. Most students are between 140 and 200 pounds, represented by the box for the middle 50% of the student weights. The middle line represents the median of 163.5 pounds. Data found in Survey 1.  An outlier is a data value that is much larger or smaller than the rest of the data. This may indicate an unusual value. The student weight of 303 is an outlier as indicated by the star in the boxplot.  Another graph you may occasional see is the ogive , also know as the cumulative frequency graph. At the end of each boundary you plot the total number of cases to that point. This is always an increasing fucntion. If you think of your accumulated credit hours for college, if you plot the total number of credits have have completd at the end of each semester you just created an ogive. The graph always starts at zero.    Shapes of Distributions  When we display numerical data in a histogram we often look at its overall shape. If the data has similar frequencies, the bars are about the same size. This is knows as a uniform distribution. The center of the distribution is around the center of the middle intervals.   uniform with equal heights     A distribution the is more bell-shaped, meaning most of the data is in the center with few on the tails and appears symmetric, is refered to as normally distributed. Symmeteric refers to imagining folding the graph in half about the middle and the two sides will align. If one of the tails is longer than the other, we refer to it as being skewed.   symmetric with hump in middle     If the data tends to cluster on the right side, and we see a few values on the left side, this is known as left skewed since the tail goes to the left of the data. This indicates the mean will be left of the median.   left skew     If the data tends to cluster on the left side, and we see a few values on the rigt side, this is known as right skewed since the tail goes to the right of the data. This indicates the mean will be right of the median.   right skew     Sometimes the graph can have multiple bumps showing certain values occur more often than others. This can be an example of bimodal (meaning two values occur more often than others).   bimodal with two humps     See the section for Graphing with StatKey for uploading one quantitative variable into StatKey to graph the data.     Graphing Two Quantitative Variables  There are times when we want to determine whether a relationship exists between two quantitative variables. This can visually be seen with a scatterplot where the data are plotted as points. The independent variable, also known as the explanatory variable, is scaled along the x-axis and the dependent variable, also known as the response variable, is scaled along the y-axis. Once the data is plotted as paired points (x,y) we can describe the pattern between the two variables.   Correlation is a statistical method used to determine whether a relationship between two quantitative variables exists.  For now, we will focus on simple linear relationships. If the pattern shows that the y-values are increasing as the x-values increase, then we have a positive correlation . If the points form an approximate line, then it’s a positive linear relationship. A negative correlation exists when one variable increase while the other variable decreases. If the points form a line, then it’s a negative linear relationship. If the points appear more random and there is no pattern, then there is typically a weak or no correlation thus no relationship exists between the two variables.  We use the correlation coefficient to describe the strength of the linear relationship as well as its direction (as positive or negative). The sample correlation coefficient value is designated as r and the population value as ρ (rho). The range of values is from -1 to +1. If there is a strong positive linear relationship, the value of r is closer to +1. If there is a strong negative linear relationship, the value of r is closer to -1. If there is no linear relationship or if there is a weak relationship, the value of r is close to 0. When the correlation values are close to +0.5 or -0.5 we will call that a moderate relationship.  First, let's use some intuitive reasoning to determine if a relationship may exist. For the following situations, do you think there is a positive relationship, negative relationship or no relationship?  We are going to investigate if there is a relationship between a person’s height and his\/her shoe size using the first day survey. If we know a person’s height, are we able to predict his\/her shoe size? Or if we know a person’s shoe size, can we predict his\/her height? Let’s find out. We will use technology to help us create the scatterplot and find the correlation value.  Link to StatKey.   Open StatKey, under the left column Descriptive Statistics and Graph , select Two Quantitative Variables. Click on the Upload File button and find the saved data file ClassSurvey1 on your computer and click Open on the bottom right.   StatKey two quantitative variables   Identify the two quantitative variables, select the x-variable first, Shoe size , and then the y-variable, Height , and then click Ok at the bottom right.   select the two quantitative variables image   The scatterplot shows each pair of points, such as size 10 shoe with the height of 66 inches, as (10,66). If we look at the pattern, we see a positive correlation. As the shoe sizes increase the student heights are also increasing.   Image of Scatterplot for Shoe Size and Height   Shoe size and Height Scatterplot.    Interpreting graph: From the table the Correlation value is 0.913 which tells us this is a strong positive linear relationship, which also matches with the positive slope of 2.014. The scatterplot is scaled based on your values. If we extend the graph to shoe size 0, we get the y-intercept of 48.396 inches.  If you click on the Switch Variables on the top right, you can switch the x-axis and y-axis. The correlation value will be the same 0.913 but the slope and y-intercept will change with the independent variable on the x-axis. We still have a positive slope which is now 0.414 and if we extend the graph to the height of 0 inches, we get the y-intercept of size -18.683. This scatterplot tells us that as the heights of the students increase, their shoe sizes tend to increase as well.   Image of Scatterplot for Height and shoe size   Scatterplot with height on x-axis.    A few words of warning: just because a correlation between variables exists it does not indicate one variable causes the other to occur. It is possible a third variable, known as a lurking variable, may account for the correlation. Just because a student is tall, does not cause their shoe size to be large. Just as having a larger shoe size does not cause a student to be taller. When working with observational studies, we cannot assume causation even if there is a strong correlation between variables.   Practice   Now let's investigate the type of relationship between a person's weight and height. Do you think this will be positive, negative, or no relationship? Click on the Change Columns to change the variables and describe the nature of the relationship from the scatterplot and the correlation coefficient.   Image of Scatterplot for Weight and Height   Scatterplot with weight on x-axis and height on y.     Correlation Coefficient   Compute the correlation coefficient between weight and height.    Correlation Coefficient r = 0.623.     Type of Relationship   Identify the type of relationship between weight and height.    There's a moderate positive linear relationship.     Describe the Relationship   Describe the relationship between weight and height.    As student's weights increase, their heights also increase.     Slope   Identify the slope when x= weight and y=height.    Slope = 0.077 is positive.     Y-intercept   Identify the y-intercept when x=weight and y=height.    The y-intercept = 54.692 inches.     Regression Equation   Identify the regression equation where x= weight and y=height.    Height = 0.077(weight)+54.692 or .        Other Graphs  "
},
{
  "id": "sec-QuantData-2",
  "level": "2",
  "url": "sec-QuantData.html#sec-QuantData-2",
  "type": "Objectives",
  "number": "2.2",
  "title": "",
  "body": "  At the end of this section you will able to     Graph quantitative data with dotplots, boxplots, and histograms.    Describe the shape of a data.    Describe the relationship from scatterplots.    Interpret graphs.    "
},
{
  "id": "subsec-QuantGraphs-2",
  "level": "2",
  "url": "sec-QuantData.html#subsec-QuantGraphs-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dotplot "
},
{
  "id": "subsec-QuantGraphs-5",
  "level": "2",
  "url": "sec-QuantData.html#subsec-QuantGraphs-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "histogram "
},
{
  "id": "subsec-QuantGraphs-8",
  "level": "2",
  "url": "sec-QuantData.html#subsec-QuantGraphs-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "boxplot "
},
{
  "id": "subsec-QuantGraphs-11",
  "level": "2",
  "url": "sec-QuantData.html#subsec-QuantGraphs-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "outlier "
},
{
  "id": "subsec-QuantGraphs-12",
  "level": "2",
  "url": "sec-QuantData.html#subsec-QuantGraphs-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "ogive "
},
{
  "id": "sec-QuantData-5",
  "level": "2",
  "url": "sec-QuantData.html#sec-QuantData-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Shapes of Distributions "
},
{
  "id": "sec-QuantData-6",
  "level": "2",
  "url": "sec-QuantData.html#sec-QuantData-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "uniform "
},
{
  "id": "sec-QuantData-9",
  "level": "2",
  "url": "sec-QuantData.html#sec-QuantData-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "normally "
},
{
  "id": "sec-QuantData-12",
  "level": "2",
  "url": "sec-QuantData.html#sec-QuantData-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "left skewed "
},
{
  "id": "sec-QuantData-15",
  "level": "2",
  "url": "sec-QuantData.html#sec-QuantData-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "right skewed "
},
{
  "id": "sec-QuantData-18",
  "level": "2",
  "url": "sec-QuantData.html#sec-QuantData-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bimodal "
},
{
  "id": "subsec-Scatterplots-2",
  "level": "2",
  "url": "sec-QuantData.html#subsec-Scatterplots-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scatterplot "
},
{
  "id": "subsec-Scatterplots-3",
  "level": "2",
  "url": "sec-QuantData.html#subsec-Scatterplots-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Correlation "
},
{
  "id": "subsec-Scatterplots-4",
  "level": "2",
  "url": "sec-QuantData.html#subsec-Scatterplots-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "positive correlation negative correlation "
},
{
  "id": "subsec-Scatterplots-5",
  "level": "2",
  "url": "sec-QuantData.html#subsec-Scatterplots-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "correlation coefficient "
},
{
  "id": "ShoeHeightScatterplot",
  "level": "2",
  "url": "sec-QuantData.html#ShoeHeightScatterplot",
  "type": "Figure",
  "number": "2.2.1",
  "title": "",
  "body": " Image of Scatterplot for Shoe Size and Height   Shoe size and Height Scatterplot.   "
},
{
  "id": "HeightvsShoeScatterplot",
  "level": "2",
  "url": "sec-QuantData.html#HeightvsShoeScatterplot",
  "type": "Figure",
  "number": "2.2.2",
  "title": "",
  "body": " Image of Scatterplot for Height and shoe size   Scatterplot with height on x-axis.   "
},
{
  "id": "subsec-Scatterplots-19",
  "level": "2",
  "url": "sec-QuantData.html#subsec-Scatterplots-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Practice "
},
{
  "id": "WeightHeightScatterplot",
  "level": "2",
  "url": "sec-QuantData.html#WeightHeightScatterplot",
  "type": "Figure",
  "number": "2.2.3",
  "title": "",
  "body": " Image of Scatterplot for Weight and Height   Scatterplot with weight on x-axis and height on y.   "
},
{
  "id": "subsec-Scatterplots-22",
  "level": "2",
  "url": "sec-QuantData.html#subsec-Scatterplots-22",
  "type": "Example",
  "number": "2.2.4",
  "title": "Correlation Coefficient.",
  "body": " Correlation Coefficient   Compute the correlation coefficient between weight and height.    Correlation Coefficient r = 0.623.   "
},
{
  "id": "subsec-Scatterplots-23",
  "level": "2",
  "url": "sec-QuantData.html#subsec-Scatterplots-23",
  "type": "Example",
  "number": "2.2.5",
  "title": "Type of Relationship.",
  "body": " Type of Relationship   Identify the type of relationship between weight and height.    There's a moderate positive linear relationship.   "
},
{
  "id": "subsec-Scatterplots-24",
  "level": "2",
  "url": "sec-QuantData.html#subsec-Scatterplots-24",
  "type": "Example",
  "number": "2.2.6",
  "title": "Describe the Relationship.",
  "body": " Describe the Relationship   Describe the relationship between weight and height.    As student's weights increase, their heights also increase.   "
},
{
  "id": "subsec-Scatterplots-25",
  "level": "2",
  "url": "sec-QuantData.html#subsec-Scatterplots-25",
  "type": "Example",
  "number": "2.2.7",
  "title": "Slope.",
  "body": " Slope   Identify the slope when x= weight and y=height.    Slope = 0.077 is positive.   "
},
{
  "id": "subsec-Scatterplots-26",
  "level": "2",
  "url": "sec-QuantData.html#subsec-Scatterplots-26",
  "type": "Example",
  "number": "2.2.8",
  "title": "Y-intercept.",
  "body": " Y-intercept   Identify the y-intercept when x=weight and y=height.    The y-intercept = 54.692 inches.   "
},
{
  "id": "subsec-Scatterplots-27",
  "level": "2",
  "url": "sec-QuantData.html#subsec-Scatterplots-27",
  "type": "Example",
  "number": "2.2.9",
  "title": "Regression Equation.",
  "body": " Regression Equation   Identify the regression equation where x= weight and y=height.    Height = 0.077(weight)+54.692 or .   "
},
{
  "id": "sec-QuantStats",
  "level": "1",
  "url": "sec-QuantStats.html",
  "type": "Section",
  "number": "2.3",
  "title": "Descriptive Statistics for Quantitative Variables",
  "body": " Descriptive Statistics for Quantitative Variables   In this chapter we will investigate multiple ways to describe the data with graphs and numerical statistics.     At the end of this section you will be able to:     Describe the center of the data with mean, median, mode.    Describe the spread of a data with range of values.     This section focuses on measures of central tendency. Many times you are asking what to expect \"on average\" or what is a typical value. These types of questions can be answered by knowing the center of the data set. There are three measures of the center of the data. They are the mean, median, and mode.  The mode is the data value that occurs the most frequently in the data. To find it, you count how often each data value occurs, and then determine which data value occurs most often. This is easily seen with a dot plot.  The median is the value in the middle of a sorted list of data. To find it, you put the data in order from smallest to larger, and then determine which data value is in the middle of the data set. If there is an odd number of values, it will land on an actually data value. When there is an even number of values you will need to average the middle two values.  The mean is the arithmetic average of the numbers. You will add all the values together then divide by the number of values.   Sample: A sample of five students have the following number of apps on their cellular phones: 72, 36, 36, 25, 48.   Solution: The mode is 36 since it occurs most often. Since there are five values, the middle value is 25, 36, 36 , 48, 72, thus the median is 36. The mean is the sum of the values divided by 5, thus 217\/5 = 43.4 is the mean apps per person. This is higher than the median because it is skewed to the right by the large value of 72.  A data set can have more than one mode. If there is a tie between two values for the most number of times, then both values are the mode and the data is called bimodal (two modes). If every data point occurs the just once, there is no mode. If there are multiple modes, then it is referred to being multimodal .  The range of a data set is the difference between the largest and the smallest data values (also known as the maximum and minimum values). This lets us know how spread apart the extreme values of the data are.   Sample: A sample of six students have the following number of apps on their cellular phones: 25, 36, 36, 48, 72, 72.   Solution: This is bimodal with modes of 36 and 72 since both occur twice. Since there are six values, the middle value is (36+48)\/2=42, thus the median is 42. The mean is the sum of the values divided by 6, thus 289\/6 = 48.167 apps per phone. The range is 72 - 25 = 47 apps, which represents the spread in the number of apps on these phones.  Find the measures of center Find the mode, median, and mean for the data set 4, 5, 6? Mode occurs most often, median is the middle value, for the mean find the sum of the values and divide by the number of values. No mode, median = 5, mean = 5   Find the mean     Find the measures of center   A sample of six students have the following number of apps on their cellular phones: 25, 36, 36, 48, 72, 72    bimodal with modes 36 and 72, median = 42 and mean = 48.167    This is bimodal with modes of 36 and 72 since both occur twice. Since there are six values, the middle value is (36+48)\/2=42, thus the median is 42. The mean is the sum of the values divided by 6, thus 289\/6 = 48.167 for the mean.    "
},
{
  "id": "sec-QuantStats-3",
  "level": "2",
  "url": "sec-QuantStats.html#sec-QuantStats-3",
  "type": "Objectives",
  "number": "2.3",
  "title": "",
  "body": "  At the end of this section you will be able to:     Describe the center of the data with mean, median, mode.    Describe the spread of a data with range of values.    "
},
{
  "id": "sec-QuantStats-4",
  "level": "2",
  "url": "sec-QuantStats.html#sec-QuantStats-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "center "
},
{
  "id": "sec-QuantStats-5",
  "level": "2",
  "url": "sec-QuantStats.html#sec-QuantStats-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mode "
},
{
  "id": "sec-QuantStats-6",
  "level": "2",
  "url": "sec-QuantStats.html#sec-QuantStats-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "median "
},
{
  "id": "sec-QuantStats-7",
  "level": "2",
  "url": "sec-QuantStats.html#sec-QuantStats-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mean "
},
{
  "id": "sec-QuantStats-8",
  "level": "2",
  "url": "sec-QuantStats.html#sec-QuantStats-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Sample: "
},
{
  "id": "sec-QuantStats-9",
  "level": "2",
  "url": "sec-QuantStats.html#sec-QuantStats-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Solution: "
},
{
  "id": "sec-QuantStats-11",
  "level": "2",
  "url": "sec-QuantStats.html#sec-QuantStats-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "range "
},
{
  "id": "sec-QuantStats-12",
  "level": "2",
  "url": "sec-QuantStats.html#sec-QuantStats-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Sample: "
},
{
  "id": "sec-QuantStats-13",
  "level": "2",
  "url": "sec-QuantStats.html#sec-QuantStats-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Solution: "
},
{
  "id": "sec-QuantStats-14",
  "level": "2",
  "url": "sec-QuantStats.html#sec-QuantStats-14",
  "type": "Checkpoint",
  "number": "2.3.1",
  "title": "Find the measures of center.",
  "body": "Find the measures of center Find the mode, median, and mean for the data set 4, 5, 6? Mode occurs most often, median is the middle value, for the mean find the sum of the values and divide by the number of values. No mode, median = 5, mean = 5   Find the mean   "
},
{
  "id": "sec-QuantStats-15",
  "level": "2",
  "url": "sec-QuantStats.html#sec-QuantStats-15",
  "type": "Example",
  "number": "2.3.2",
  "title": "Find the measures of center.",
  "body": " Find the measures of center   A sample of six students have the following number of apps on their cellular phones: 25, 36, 36, 48, 72, 72    bimodal with modes 36 and 72, median = 42 and mean = 48.167    This is bimodal with modes of 36 and 72 since both occur twice. Since there are six values, the middle value is (36+48)\/2=42, thus the median is 42. The mean is the sum of the values divided by 6, thus 289\/6 = 48.167 for the mean.   "
},
{
  "id": "sec-MultiGraphs",
  "level": "1",
  "url": "sec-MultiGraphs.html",
  "type": "Section",
  "number": "2.4",
  "title": "Multivariable Graphs",
  "body": " Multivariable Graphs   There are many other types of graphs that you can use to summarize data, depending on what the data is intended to display. We are not limited to graphing with just one or two variables. We are going to explore a few online resources that have interactive graphs.     At the end of this section you will be able to:     Recognize data can be visualized in a variety of ways    Interpret a variety of graphs     There are many other types of graphs that you can use to display data. Pictographs use pictures to represent objects. You may see time series plots to show how quantities change over time. Sometimes quantities are displayed in a density map where the higher concentrations are darker in color. These are but a few examples involving climate data that we will explore.  The National Centers for Environmental Information (NCEI) tracks severe weather and climate events from a historical perspective and their economic and societal impacts.  The U.S. has sustained 403 weather and climate disasters since 1980 where overall damages\/costs reached or exceeded $1 billion (including CPI adjustment to 2025). The total cost of these 403 events exceeds $2.945 trillion.  Back in the 1980s the average was 9 severe events per year, yet in the most recent 5 years the average is 23 events per year. The increase in the number of climate disasters is costly.  The pictograph below denotes the location of 27 separate billion-dollar weather and climate disasters that impacted the United States in 2024.   US Map showing Weather Disasters   US Map showing location of weather disasters that exceeded 1 billion dollars in costs.    graph source:    Graph interpretation: The graph depicts the location of the severe weather disaster as well as their type with a pictograph. The graph also indicates the dates of these disasters in 2024. The tropical cyclones and hurricanes occur along the coasts while the tornadoes occur in the central states. There was only one case of flooding that exceeded the $1 billion mark.  The graph below is a segmented bar graph where each color represents a different type of severe weather event. On the left-side axis, it depicts the number of events for the year listed on the x-axis. We can see that the total number of events is increasing over time. This is an example of a time series plot.   Number of Weather Disasters since 1980   Summarized number of weather disasters by category that exceeded 1 billion dollars in costs.    graph source:    Graph interpretation: We can see in more recent years on the right side of the graph that severe storms (green bars) and tropical cyclones (yellow bars) are occurring more frequently.  If you go to the website, you can click on a specific year to find the totals for each category as well as the 5-year average cost and the 95% confidence interval of the cost. The right-side axis gives the total cost in billions for those events. We can see that the total number of events is increasing over time, as well as the total cost for these events. The graph below summarizes the data for 2024.   Costs of Weather Disasters since 1980   Summarized costs of weather disasters by category in US.    Graph interpretation: In 2024, there were 27 confirmed U.S. billion-dollar weather and climate disaster events. These events include: 17 severe storm events (tornado outbreaks, high wind, hailstorms), 5 tropical cyclones, one wildfire, one drought\/heat wave, one flooding, and two winter storm events. The total cost of these 27 events was $184.8 billion. The red line for the Combined Disaster Cost is another example of a time-series plot. We can see that in 2005 and 2017 the total cost jumped dramatically.   Exercises   The segmented graph below summarizes the total number of billion-dollar disasters throughout the year since 1980 according to the month they occurred.   Monthly Weather Disasters since 1980   Summarized number of weather disasters by category that exceeded 1 billion dollars in costs.    graph source:   Using the United States Billion Dollar Disaster Type Counts by Month graph above, answer the following questions.  The Southern California Earthquake Data Center (SCEDC) is the archive of the Caltech\/USGS Southern California Seismic network (SCSN). They track the location and size of seismic activities in California. This graph illustrates the location of recent earthquakes in southern California. The dots are color coded for when the earthquake occurred, red for within the last hour, blue for within the last week, and yellow for within the last 30 days. The size of the dots indicates the magnitude (or strength) of the earthquake. If you go to the website, you can click on a specific dot to identify the date, time, and magnitude of the earthquake.   Earthquakes in southern California around May 1, 2025   Shows location and size of earthquakes in California.    graph source:    Graph interpretation We can see there is a red dot near Carson City, Nevada which had a magnitude of 0.9 on May 1. The yellow dot near San Diego, California had a magnitude of 2.45 on April 29, 2025.  The National Centers for Environmental Information has an interactive mapping tool to help visualize the location and cost for billion-dollar climate events. This mapping of the United States shows which states had the most extensive cost for wildfires from 2000 through April of 2025.   Wildfire costs by state   Shows accumulated cost of wildfires by state.    The density map above summarizes the 19 wildfire events with losses exceeding $1-billion dollars each. The darker the color the more loss for that state. California has between $50-$100 billion in loss while Colorado and Oregon have $5-$10 billion in wildfire loss. The states in white had no billion-dollar level wildfires. The total is between $100-$200 billion for this time period of 2000-2025.  This density map of the United States (below) shows which states had the most extensive cost for tropical cyclones and hurricanes for 2000-2024. There were 48 tropical cyclone events with losses exceeding $1 billion each. Florida has experienced over $360 billion in loss. Texas and Louisiana had $200-300 billion in damage. The total for the 25 years displayed is $1.3 trillion dollars.   Tropical cyclone costs by state   Shows accumulated cost of cyclones by state.    Using the link below, explore other weather disasters and the accumulated costs or frequency per state. You can adjust to the years of interest since 1980.  Interactive website:   The Storm Prediction Center (SPC) is part of the National Weather Service (NWS) and provide timely forecasts and watches for severe thunderstorms and tornadoes over the contiguous United States.  Interactive website:   Below is a severe weather map for the Month of April in 2025. Each red triangle depicts the location of a tornado, blue squares represent severe wind, and green circles represent severe hail. The larger the symbol, the stronger the tornado, wind speed, or hail stone size.   Severe Weather events in April 2025   US map showing location of severe weather.     Interpretation: From the legend, we can see there were 341 tornadoes in the US with 35 rating of EF2 or greater in the month of April 2025. There were 1781 severe wind storms with 44 of them exceeding 75 mile per hour gusts. There were 1031 severe hailstorms with 444 storms with hail stones of at least 1 inch and 177storms with hailstones more than 2 inches in diameter.  We can compare this to the severe weather map from April in 2000. Does there appear to be more severe with storms across the United States now or then?   Severe Weather events in April 2000   US map showing location of severe weather.    In April 2000, there were 136 tornadoes, 737 severe windstorms, and 679 storms with severe hail. It does appear there were more severe weather storms in 2025 than in 2000.  "
},
{
  "id": "sec-MultiGraphs-3",
  "level": "2",
  "url": "sec-MultiGraphs.html#sec-MultiGraphs-3",
  "type": "Objectives",
  "number": "2.4",
  "title": "",
  "body": "  At the end of this section you will be able to:     Recognize data can be visualized in a variety of ways    Interpret a variety of graphs    "
},
{
  "id": "sec-MultiGraphs-8",
  "level": "2",
  "url": "sec-MultiGraphs.html#sec-MultiGraphs-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "pictograph "
},
{
  "id": "DisasterMap",
  "level": "2",
  "url": "sec-MultiGraphs.html#DisasterMap",
  "type": "Figure",
  "number": "2.4.1",
  "title": "",
  "body": " US Map showing Weather Disasters   US Map showing location of weather disasters that exceeded 1 billion dollars in costs.   "
},
{
  "id": "sec-MultiGraphs-12",
  "level": "2",
  "url": "sec-MultiGraphs.html#sec-MultiGraphs-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "segmented bar graph "
},
{
  "id": "NumberDisasters",
  "level": "2",
  "url": "sec-MultiGraphs.html#NumberDisasters",
  "type": "Figure",
  "number": "2.4.2",
  "title": "",
  "body": " Number of Weather Disasters since 1980   Summarized number of weather disasters by category that exceeded 1 billion dollars in costs.   "
},
{
  "id": "DisasterCosts",
  "level": "2",
  "url": "sec-MultiGraphs.html#DisasterCosts",
  "type": "Figure",
  "number": "2.4.3",
  "title": "",
  "body": " Costs of Weather Disasters since 1980   Summarized costs of weather disasters by category in US.   "
},
{
  "id": "sec-MultiGraphs-19",
  "level": "2",
  "url": "sec-MultiGraphs.html#sec-MultiGraphs-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Exercises "
},
{
  "id": "MonthlyDisasters",
  "level": "2",
  "url": "sec-MultiGraphs.html#MonthlyDisasters",
  "type": "Figure",
  "number": "2.4.4",
  "title": "",
  "body": " Monthly Weather Disasters since 1980   Summarized number of weather disasters by category that exceeded 1 billion dollars in costs.   "
},
{
  "id": "CalifEarthquakeMap",
  "level": "2",
  "url": "sec-MultiGraphs.html#CalifEarthquakeMap",
  "type": "Figure",
  "number": "2.4.5",
  "title": "",
  "body": " Earthquakes in southern California around May 1, 2025   Shows location and size of earthquakes in California.   "
},
{
  "id": "WildfireMap",
  "level": "2",
  "url": "sec-MultiGraphs.html#WildfireMap",
  "type": "Figure",
  "number": "2.4.6",
  "title": "",
  "body": " Wildfire costs by state   Shows accumulated cost of wildfires by state.   "
},
{
  "id": "CycloneMap",
  "level": "2",
  "url": "sec-MultiGraphs.html#CycloneMap",
  "type": "Figure",
  "number": "2.4.7",
  "title": "",
  "body": " Tropical cyclone costs by state   Shows accumulated cost of cyclones by state.   "
},
{
  "id": "WeatherGraph",
  "level": "2",
  "url": "sec-MultiGraphs.html#WeatherGraph",
  "type": "Figure",
  "number": "2.4.8",
  "title": "",
  "body": " Severe Weather events in April 2025   US map showing location of severe weather.   "
},
{
  "id": "WeatherGraph2",
  "level": "2",
  "url": "sec-MultiGraphs.html#WeatherGraph2",
  "type": "Figure",
  "number": "2.4.9",
  "title": "",
  "body": " Severe Weather events in April 2000   US map showing location of severe weather.   "
},
{
  "id": "sec-GraphStatky",
  "level": "1",
  "url": "sec-GraphStatky.html",
  "type": "Section",
  "number": "2.5",
  "title": "Graphing with StatKey",
  "body": " Graphing with StatKey  In this section we will focus on how to graph data with technology. We will be using StatKey which is an online statistical tool. The program has some pre-built data sets to explore and allows you to upload your own data from a csv spreadsheet.  We are going to investigate the variables found in the Class Survey 1 by graphing and interpreting the data.     Graphing One Categorical Variable  First, we will explore student eye color which is a categorical variable. StatKey will construct a bar graph and frequency table for the eye colors.  Click on the following link to take you to StatKey   Download the csv file ClassSurvey1.csv posted in Canvas and save to your computer where it is easily accessible. We are going to upload the data file to analyze the students eye colors.  Under the Descriptive Statistics and Graph column on the left, choose the One Categorical Variable .   Image of StatKey menu   The second option under descriptive statistics menu is the one categorical variable.    Click on the Upload File button and locate the data file on your computer and click open . Identify which variable you will analyze (Eye Color) and click OK near the bottom of the window.   image to click on eye color label.   The program constructs a bar graph and frequency table. The output image is below.   Sample image of StatKey output.   Bar graph and frequency table of the students eye color from StatKey.       Interpreting the Bar Graph   From the bar graph we can see that most students have brown eyes (28 students which represents 66.67% of the class) and hazel eyes occur the least often with just 3 students. From the frequency table we see the sample consisting of 42 UNC students. There are 6 students with blue eyes and 5 students with green eyes.   Checkpoint Using the eye color graph above, which of the following statements are correct? Select all that apply.  Interpreting information from a graph  Using the graph above, select all true statements that apply to the eye color graph.     Brown eyes occur most often for these students.    Brown eyes is represented by the tallest bar.      Blue eyes occurred 14.3%    Take the frequency count and divide by the sample size for the percentage.      The sample size is 54 students.    Look at the total from the frequency table for 42 total.      The distribution is right skewed.    We do not discuss distribution shape with categorical data.       Sometimes discrete numerical data can be represented with a bar graph. But the order the data is listed is based on the order the data is read into the StatKey program. Click on the Change Column button and select the sibling data. Notice that the graph does not list them in numerical order, rather by the way the data was listed in the spreadsheet. If you click on the Show Data Table button it shows the data file. This is why we do not discuss skewness with categorical data, we can change the order the categories are graphed, and it changes the shape.      Graphing One Quantitative Variable  In this section we will explore the number of siblings for these UNC students. This is a discrete quantitative variable (although one student claimed 1.5 siblings). StatKey will construct a dotplot, histogram, and boxplot for the data. StatKey will also create a Summary Statistics table identifying the sample size, mean, median, standard deviation, and the five-number summary.  Click on the following link to take you to StatKey   Download the csv file ClassSurvey1.csv posted in the Data Set Chapter and save to your computer where it is easily accessible. We are going to analyze the numerical data.  Under the Descriptive Statistics and Graph column on the left, choose the One Quantitative Variable .   Image of StatKey menu   The first option under descriptive statistics menu is the one quantitative variable.    Click on the Upload File button and locate the data file on your computer and click open . Identify which numerical variable you will analyze (Siblings) and click the OK button at the bottom right of the window.   select sibling variable.   The program will construct all three graphs and the summary table.   StatKey Output of Sibling Dotplot   Dotplot showing 0 to 7 siblings with most at 2 siblings.     Interpreting the Dotplot: We can see there are three students with 0 siblings (minimum) and one student with 7 siblings (maximum). Most students have 1-3 siblings, with 2 siblings occurring most for 15 students. Recall each dot represents the number of siblings for that student, thus there are 42 dots to represent the sample size of 42 students. You can hover over a dot to display the value. The summary statistics table is on the right identifying the mean, median, and standard deviation.  If we click on the Histogram button we can see the histogram graph and the summary statistics table.   StatKey Output of Histogram   Histogram showing bars for siblings.     Interpreting the Histogram: We can see the data is grouped into 10 bars (although we see just 7 since some intervals are empty). On the right side we can use the slider to change the number of bars for the histogram. Shift the slider left so you have 8 buckets. This is a better histogram. We can see that the histograms are right skewed since most values are on the left side with a few far to the right. A few larger values pull the mean to the right, thus right skewed.  Next, click on the Boxplot button to see the boxplot graph, also known as a box-and-whisker plot.   StatKey Output of Boxplot   Boxplot showing box around 1-3 siblings.     Interpreting the Boxplot: The boxplot displays the five-number summary. The box represents the quartiles Q1 = 1 sibling and Q3 = 3 siblings, with the middle line representing the median of 2 siblings. The whisker goes left to the smallest value of 0 and the right whisker to the largest value of 7 siblings. In this case, 7 siblings is an outlier as indicated by the star or asterisk. The summary statistics table identifies the values for the five-number summary.  Click on the Change Columns button to change variables. Weights and Heights are continuous quantitative variables. Investigate the shape of the graphs, where the center is represented, and how spread out the values are. Use the boxplot to check for outliers.    One Categorical and One Quantitative Variable    Graphing Two Categorical Variables    Graphing Two Quantitative Variables   We are going to investigate if there is a relationship between a person’s height and his\/her shoe size using the first day survey.  Open StatKey, under the left column Descriptive Statistics and Graph , select Two Quantitative Variables. Click on the Upload File button and find the saved data file ClassSurvey1 on your computer and click Open on the bottom right.   StatKey two quantitative variables   Identify the two quantitative variables, select the x-variable first, Shoe size , and then the y-variable, Height , and then click Ok at the bottom right.   select the two quantitative variables image   The scatterplot shows each pair of points, such as size 10 shoe with the height of 66 inches, as (10,66). If we look at the pattern, we see a positive correlation. As the shoe sizes increase the student heights are also increasing. From the table the Correlation value is 0.913 which tells us this is a strong positive linear relationship, which also matches with the positive slope of 2.014. The scatterplot is scaled based on your values. If we extend the graph to shoe size 0, we get the y-intercept of 48.396 inches.   Image of Scatterplot for Shoe Size and Height   Shoe size and Height Scatterplot.    If you click on the Switch Variables on the top right, you can switch the x-axis and y-axis. The correlation value will be the same 0.913 but the slope and y-intercept will change with the independent variable on the x-axis. We still have a positive slope which is now 0.414 and if we extend the graph to the height of 0 inches, we get the y-intercept of size -18.683. This scatterplot tells us that as the heights of the students increase, their shoe sizes tend to increase as well.   Image of Scatterplot for Height and shoe size   Scatterplot with height on x-axis.    If you click on the box Show Regression Line , the program will add the regression line to the scatterplot to help you make the predictions. Recall that the regression line is also know as the line of best fit since it minimizes the distances each point is to the regression line.  "
},
{
  "id": "sec-GraphStatky-2",
  "level": "2",
  "url": "sec-GraphStatky.html#sec-GraphStatky-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "StatKey "
},
{
  "id": "OneCatStatKey",
  "level": "2",
  "url": "sec-GraphStatky.html#OneCatStatKey",
  "type": "Figure",
  "number": "2.5.1",
  "title": "",
  "body": " Image of StatKey menu   The second option under descriptive statistics menu is the one categorical variable.   "
},
{
  "id": "StatKeyEyeColor",
  "level": "2",
  "url": "sec-GraphStatky.html#StatKeyEyeColor",
  "type": "Figure",
  "number": "2.5.2",
  "title": "",
  "body": " Sample image of StatKey output.   Bar graph and frequency table of the students eye color from StatKey.   "
},
{
  "id": "subsec-OneCatStatkey-14",
  "level": "2",
  "url": "sec-GraphStatky.html#subsec-OneCatStatkey-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Checkpoint "
},
{
  "id": "EyeColor-matching",
  "level": "2",
  "url": "sec-GraphStatky.html#EyeColor-matching",
  "type": "Checkpoint",
  "number": "2.5.3",
  "title": "Interpreting information from a graph.",
  "body": "Interpreting information from a graph  Using the graph above, select all true statements that apply to the eye color graph.     Brown eyes occur most often for these students.    Brown eyes is represented by the tallest bar.      Blue eyes occurred 14.3%    Take the frequency count and divide by the sample size for the percentage.      The sample size is 54 students.    Look at the total from the frequency table for 42 total.      The distribution is right skewed.    We do not discuss distribution shape with categorical data.    "
},
{
  "id": "OneQuantStatKey",
  "level": "2",
  "url": "sec-GraphStatky.html#OneQuantStatKey",
  "type": "Figure",
  "number": "2.5.4",
  "title": "",
  "body": " Image of StatKey menu   The first option under descriptive statistics menu is the one quantitative variable.   "
},
{
  "id": "SiblingDotsStatKey",
  "level": "2",
  "url": "sec-GraphStatky.html#SiblingDotsStatKey",
  "type": "Figure",
  "number": "2.5.5",
  "title": "",
  "body": " StatKey Output of Sibling Dotplot   Dotplot showing 0 to 7 siblings with most at 2 siblings.   "
},
{
  "id": "SiblingHistogramStatKey",
  "level": "2",
  "url": "sec-GraphStatky.html#SiblingHistogramStatKey",
  "type": "Figure",
  "number": "2.5.6",
  "title": "",
  "body": " StatKey Output of Histogram   Histogram showing bars for siblings.   "
},
{
  "id": "SiblingBoxplotStatKey",
  "level": "2",
  "url": "sec-GraphStatky.html#SiblingBoxplotStatKey",
  "type": "Figure",
  "number": "2.5.7",
  "title": "",
  "body": " StatKey Output of Boxplot   Boxplot showing box around 1-3 siblings.   "
},
{
  "id": "ShoeHeightScatterplot",
  "level": "2",
  "url": "sec-GraphStatky.html#ShoeHeightScatterplot",
  "type": "Figure",
  "number": "2.5.8",
  "title": "",
  "body": " Image of Scatterplot for Shoe Size and Height   Shoe size and Height Scatterplot.   "
},
{
  "id": "HeightvsShoeScatterplot",
  "level": "2",
  "url": "sec-GraphStatky.html#HeightvsShoeScatterplot",
  "type": "Figure",
  "number": "2.5.9",
  "title": "",
  "body": " Image of Scatterplot for Height and shoe size   Scatterplot with height on x-axis.   "
},
{
  "id": "sec-DesStat-Centers",
  "level": "1",
  "url": "sec-DesStat-Centers.html",
  "type": "Section",
  "number": "3.1",
  "title": "Measures of Center",
  "body": " Measures of Center   This section focuses on measures of central tendency to describe the center of the data. We are looking at what is considered a typical value. We will use the mean, median, mode, and midrange to describe the center.     At the end of this section you will be able to     Determine if data has a mode or is multimodal    Calculate the mean, median, and midrange for data    Use technology to find the mean, median, and midrange      Understanding the Basics   Many times, you are asked what to expect on average or what is a typical value. These types of questions can be answered by knowing the center of the data set. There are three measures of the center that we will focus on: the mean, median, and mode.  The mode is the data value that occurs the most frequently in the data. To find it, you count how often each data value occurs and then determine which data value occurs most often. This is easily seen with a dot plot or a list of values.   Example: A sample of five students are taking the number of credits this semester: 12, 15, 15,16,18. The mode is 15 credits since it occurs more often than the other values.   Example: A sample of six students are taking the number of credits this semester: 12, 15, 15,16,18, 18. This example is bimodal since there are two modes: 15 credits and 18 credits since they occur more often than the other values.  The median is the value in the middle of a sorted list of data. To find it, you put the data in order from smallest to largest and then determine which data value is in the middle of the data set. If there is an odd number of values, it will land on an actual data value. When there is an even number of values you will need to average the middle two values.   Example: A sample of five students are taking the number of credits this semester: 18, 12, 15,16, 14.   Solution: First put the value in order: 12, 14, 15 ,16, 18. There are 5 values so the middle value when in order is 15.   Example: A sample of six students are taking the number of credits this semester: 18, 16, 15,19, 12, 14.   Solution: First put the values in order: 12, 14, 15,16, 18, 19. There are 6 values so the middle value is between the middle two values of 15 and 16, thus the median is credits.  The mean is the arithmetic average of the numbers. You will add all the values together and then divide by the number of values.  The formula for the sample mean is   where x-bar represents the mean, the sigma symbol indicates to find the sum of the data values, where each x is a data value, and then divide by the sample size of n .   Example: A sample of five students are taking the number of credits this semester: 12, 14, 15,16, 18.   Solution: The sum is 75 divided by the 5 values so the mean is 15 credits per person.    The formula for the population mean is     where represents the mean, the sigma symbol indicates to find the sum of the data values, where each X is a data value in the population, and then divide by the size N of the population.  Another measure of the center is the midrange which is the average of the smallest and largest value of the data set. The midrange is the middle of the range of values in the data.   Example: A sample of five students are taking the number of credits this semester: 12, 14, 15,16, 18. The average of the smallest and largest is (12+18)\/2 = 15 credits.  A sample of five students have the following number of apps on their cellular phones: 36, 48, 36, 72, 25. Find the measures of center.   The mode is 36 since it occurs most often. Since there are five values, the middle value is 25, 36, 36 , 48, 72 when arranged in order, thus the median is 36. The mean is the sum of the values divided by 5, thus apps per student. This is higher than the median because it is skewed to the right by the large value of 72. The midrange which is also shifted to the right.    A sample of five students have the following number of apps on their cellular phones: 36, 48, 36, 72, 25. Find the measures of center.    The mode is 36 since it occurs most often. Since there are five values, the middle value is 25, 36, 36 , 48, 72 when arranged in order, thus the median is 36. The mean is the sum of the values divided by 5, thus apps per student. This is higher than the median because it is skewed to the right by the large value of 72. The midrange which is also shifted to the right.     Using TI-83 Calculator for Summary Statistics  Next, we will use technology to find the measures of center. These directions are for the TI-83 Plus which should be the same for the TI-84. We will use the same scenario as our last check point. Example: A sample of five students have the following number of apps on their cellular phones: 36, 48, 36, 72, 25. Find the measures of center.  First, enter the raw data into one of the lists: Start with the STAT button and under the EDIT menu choose option 1:Edit and then hit the enter button.   image of STAT button 1:Edit   Type in the values and hit [enter] after each entry.   image of entering data   Select the [STAT] button and use an arrow to the right once to highlight CALC across the top. Then select option 1 for 1-Var Stats which refers to 1-variable statistics and then hit [enter]. Next you need to identify where the data is located, so select L1 by hitting the [2nd] button then the number 1 which has L1 above it and then [enter] button.   image of 1VarStat   Note: If you are using a TI-84 the List is L1 and the FreqList is left blank, scroll to Calculate and hit [enter]. You should see the following outputs for either calculator.   image of summary statistics    Calculator Summary: Reading the values going down, is the mean of 43.4, the sum of the values is 217, if we squared each value and found the sum that is the value 10705. Sx = 17.9388 is the sample standard deviation and σx = 16.045 is the population standard deviation (which we will not use in this course). The sample size is n = 5, the arrow pointing down indicates there are more values to follow so click on the arrow down button until all the other values show. MinX = 25 is the smallest value, Q1 = 30.5 is the first quartile, Med = 36 is the median, Q3 = 60 is the third quartile, and maxX = 72 is the maximum value in the data. We will talk about these values later in this chapter.  Note: the mode is not given in the summary statistics. But we can find it by sorting the data from smallest to largest and check the frequencies.  Click on the [STAT] button and under EDIT select option 2: Sort A( and hit the [enter] button.  Next you need to identify where the data is located, so select L1 by hitting the [2nd] button then the number 1 which has L1 above it and the ) button and then [enter]. It should say Done .   image to sort data   Now go back to [STAT] button and select option 1:Edit and [enter] to look at the data. It is now sorted in ascending order. Now we can see the mode is 36 since it occurs twice.   image of sorted data     Application Problems  Now that we understand the basics, let's analyze the typical number of siblings from a sample of 20 UNC students from Survey 1 using technology. The data set is below.  You can clear out the list or enter the values in L2. To clear the list, click on the [STAT] button and under EDIT select option 4:ClrList and hit [enter] then identify the list to clear as L1 and hit [enter].   image of sorted data     Using StatKey to Find Summary Statistics  Now that we understand the basics, let's analyze a larger data set with technology.   "
},
{
  "id": "sec-DesStat-Centers-3",
  "level": "2",
  "url": "sec-DesStat-Centers.html#sec-DesStat-Centers-3",
  "type": "Objectives",
  "number": "3.1",
  "title": "",
  "body": "  At the end of this section you will be able to     Determine if data has a mode or is multimodal    Calculate the mean, median, and midrange for data    Use technology to find the mean, median, and midrange    "
},
{
  "id": "sec-DesStat-Centers-6",
  "level": "2",
  "url": "sec-DesStat-Centers.html#sec-DesStat-Centers-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mode "
},
{
  "id": "sec-DesStat-Centers-8",
  "level": "2",
  "url": "sec-DesStat-Centers.html#sec-DesStat-Centers-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bimodal "
},
{
  "id": "sec-DesStat-Centers-9",
  "level": "2",
  "url": "sec-DesStat-Centers.html#sec-DesStat-Centers-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "median "
},
{
  "id": "sec-DesStat-Centers-14",
  "level": "2",
  "url": "sec-DesStat-Centers.html#sec-DesStat-Centers-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mean "
},
{
  "id": "sec-DesStat-Centers-24",
  "level": "2",
  "url": "sec-DesStat-Centers.html#sec-DesStat-Centers-24",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "midrange "
},
{
  "id": "sec-DesStat-Centers-25",
  "level": "2",
  "url": "sec-DesStat-Centers.html#sec-DesStat-Centers-25",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Example: "
},
{
  "id": "sec-DesStat-Centers-26",
  "level": "2",
  "url": "sec-DesStat-Centers.html#sec-DesStat-Centers-26",
  "type": "Checkpoint",
  "number": "3.1.1",
  "title": "",
  "body": "A sample of five students have the following number of apps on their cellular phones: 36, 48, 36, 72, 25. Find the measures of center.   The mode is 36 since it occurs most often. Since there are five values, the middle value is 25, 36, 36 , 48, 72 when arranged in order, thus the median is 36. The mean is the sum of the values divided by 5, thus apps per student. This is higher than the median because it is skewed to the right by the large value of 72. The midrange which is also shifted to the right.  "
},
{
  "id": "sec-DesStat-Centers-27",
  "level": "2",
  "url": "sec-DesStat-Centers.html#sec-DesStat-Centers-27",
  "type": "Example",
  "number": "3.1.2",
  "title": "",
  "body": " A sample of five students have the following number of apps on their cellular phones: 36, 48, 36, 72, 25. Find the measures of center.    The mode is 36 since it occurs most often. Since there are five values, the middle value is 25, 36, 36 , 48, 72 when arranged in order, thus the median is 36. The mean is the sum of the values divided by 5, thus apps per student. This is higher than the median because it is skewed to the right by the large value of 72. The midrange which is also shifted to the right.   "
},
{
  "id": "subsec-CenterCalc-2",
  "level": "2",
  "url": "sec-DesStat-Centers.html#subsec-CenterCalc-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Example: "
},
{
  "id": "subsec-CenterCalc-3",
  "level": "2",
  "url": "sec-DesStat-Centers.html#subsec-CenterCalc-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "1:Edit "
},
{
  "id": "subsec-CenterCalc-7",
  "level": "2",
  "url": "sec-DesStat-Centers.html#subsec-CenterCalc-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "1-Var Stats "
},
{
  "id": "subsec-CenterCalc-13",
  "level": "2",
  "url": "sec-DesStat-Centers.html#subsec-CenterCalc-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "2: Sort A( "
},
{
  "id": "subsec-CenterCalc-16",
  "level": "2",
  "url": "sec-DesStat-Centers.html#subsec-CenterCalc-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "1:Edit "
},
{
  "id": "sec-DesStat-Spread",
  "level": "1",
  "url": "sec-DesStat-Spread.html",
  "type": "Section",
  "number": "3.2",
  "title": "Measures of Spread",
  "body": " Measures of Spread  Variability is an important idea in statistics. If we were to measure the height of everyone in our class, every observation could give a different value. That means not every student is the same height. Thus, there is variability in the heights of the students in class. If we asked the heights of students in several different classes, there will be variation among the different samples. Variability describes how the data are spread out. If the data are very close to each other, then there is low variability. If the data are very spread out, then there is high variability. We will investigate the range, variance, and standard deviation as measures of spread in the values.    At the end of this section you will be able to     Determine the range of values    Calculate the variance and standard deviation    Use technology to find the standard deviation      Understanding the Basics  The range of a set of data is the difference between the largest and the smallest data values (also known as the maximum and minimum values). This lets us know how spread apart the extreme values of the data are.  Range = maximum – minimum  A better way is to describe the variability within the data with the standard deviation , which is the average distance each value is from the mean. We will illustrate this with an example and then review how to calculate it using technology.  Suppose you need to re-stain the fence in your backyard. There are two common brands at the local hardware store. Before purchasing the new stain, you ask your neighbors how long the stain lasts before having to re-stain the fence. For Brand A you find it needs reapplied after 25, 30, 35, 40, 45 months. For Brand B it needed to be reapplied after 10, 35, 35, 45, 50 months.  Based on this small sample, which brand would you choose and why?  As a new statistics student, you decided to compare the centers to see how long each brand typically lasts. We see there is no mode for Brand A, the mean is 175\/5= 35 months, and the median is 35 months. For Brand B the mode is 35 months, the mean is 175\/5= 35 months, and the median is 35 months. From these results one might assume both brands will last equally as long. So, we need another way to analyze the data – thus the amount of spread and variation in how long each brand lasts.  Range of Brand A = 45 - 25 = 20 months  Range of Brand B = 50 - 10 = 40 months.  Brand A has a smaller spread in values while Brand B is more spread out in how long the stain lasts. Brand B may only last 10 months or as long as 50 months.  To find the deviation , we find the distance between each value and the mean. Take the value and subtract the mean of 35. Keep track of the negative values to indicate the values was below the mean and positive that it lasted longer than the mean. The sum of the deviations should be around zero.  Next, we will square each deviation value. Find the total deviation by adding them together and then divide by one less than the sample size. This will give the sample variance for each brand.   table showing deviation computation   Variance for Brand A is 250\/4 = 62.5 and the variance for Brand B is 950\/4 =237.5  Square root the variance to get the standard deviation. This describes how far most values are from the mean. The smaller the standard deviation, the more consistent the brand of stain lasts since it is closer to the mean.  Standard deviation for Brand A is   Standard deviation for Brand B is   Therefore, Brand A is more consistent around the mean while Brand B has more variation in how long the stain will last.   boxplot of stain values   The boxplot helps to see that Brand A is more consistent while Brand B is more spread out. The value of 10 is an outlier in the boxplot for Brand B.  In general a small standard deviation indicates the data is close together around the mean (more consistent) while a large standard deviation indicates the data is more spread out (less consistent). If a manufacturer is making bolts, they want the diameters to be very consistent so the nuts still fit, thus they want a small standard deviation.  Claiming the standard deviation is small or large also depends on the actual data values. To a bicyclist whose average speed is 20 mph, s = 10 mph is huge. To an airplane whose average speed is 500 mph, s = 10 mph is relatively small. The size of the variation depends on the size of the numbers in the data and the mean.  The good news is we can use technology to find the standard deviation. This is the only time we will do it by hand. Next is to find standard deviation on the calculator.    Using TI-83 Calculator for Summary Statistics  Suppose you need to stain the fence in your backyard. There are two common brands at the local hardware store. Before purchasing the new stain, you ask your neighbors how long the stain lasts before having to re-stain the fence. For Brand A you find it needs reapplied after 25, 30, 35, 40, 45 months. For Brand B it needed to be reapplied after 10, 35, 35, 45, 50 months.  Let's use technology to find the standard deviation to see which brand is more consistent.  First, enter the raw data into one of the lists: Start with the STAT button and under the EDIT menu choose option 1:Edit and then hit the enter button.   image of STAT button 1:Edit   Type in the values from Brand A in L1 and hit [enter] after each entry. Enter the values from Brand B in L2 and hit [enter] after each entry.   image of entering brand data   Select the [STAT] button and use an arrow to the right once to highlight CALC across the top. Then select option 1 for 1-Var Stats which refers to 1-variable statistics and then hit [enter]. Next you need to identify where the data is located, so select L1 by hitting the [2nd] button then the number 1 which has L1 above it and then [enter] button. This will give the summary for Brand A. The sample standard deviation is 7.9, to find the variance we square the value thus    values for Brand A   Repeat for Brand B. Select the [STAT] button and use an arrow to the right once to highlight CALC across the top. Then select option 1 for 1-Var Stats and then hit [enter] and select the location L2 by hitting the [2nd] button then the number 2 which has L2 above it and then [enter] button. The sample standard deviation is 15.41 which lets us know the values are more spread out than Brand A, to find the variance we square the value thus .   values for Brand B   Note: If you are using a TI-84 the List is L1 and the FreqList is left blank, scroll down to Calculate and hit [enter]. You should see the following outputs for Brand A.   TI84 values for Brand A   And to the following outputs for Brand B by changing the List to L2.   TI84 values for Brand B     Using the Standard Deviation  One of the uses of the standard deviation is to describe how a population is distributed by using the Empirical Rule. This rule describes how much data is within a certain distance on either side of the mean.  Approximately 68% of the data fall with one standard deviation of the mean, giving the interval from μ − σ to μ + σ for the middle 68% of the values in a distribution.  Approximately 95% of the data fall with two standard deviations of the mean, giving the interval from μ − 2σ to μ + 2σ . This gives the middle 95% of the values in the distribution. This is often called the 95% Rule.  Approximately 99% of the data fall with three standard deviations of the mean, giving the interval from μ − 3σ to μ + 3σ .   Example: Find the interval for middle 68% of time that the stain will last for Brand A.   Solution: The 68% rules says the values are within 1 standard deviation of the mean, Since the mean is 35 months and the standard deviation is 7.9, the interval is 35 - 7.9 to 35 + 7.9 giving 27.1 to 42.9 months for the typical time the stain will last.   Example: Use the 95% rule for the time interval that Brand B will last.   Solution: The 95% rule says the values are within 2 standard deviation of the mean, Since the mean is 35 months and the standard deviation is 15.4, the interval is 35 - 2(15.4) to 35 + 2(15.4) giving 4.2 to 65.8 months. This interval is much wider because there was more variation in the original data.    Summary of formulas and notations   range = maximum – minimum  The sample standard deviation is designated by and the sample variance is . The formula for the sample standard deviation is     The formula says we took each value and subtract the sample mean , we square the difference, then add them all together, and then divided by one less than the sample size to get the variance. Then we take the square root to get the standard deviation. Aren’t you glad we can do this with technology!  The population standard deviation is designated by and the variance is . The formula for the population standard deviation is     The formula says we took each value and subtract the population mean , we square the difference, then add them all together, and then divided by the population size to get the variance. Then we take the square root to get the population standard deviation .   Application Problems   "
},
{
  "id": "sec-DesStat-Spread-3",
  "level": "2",
  "url": "sec-DesStat-Spread.html#sec-DesStat-Spread-3",
  "type": "Objectives",
  "number": "3.2",
  "title": "",
  "body": "  At the end of this section you will be able to     Determine the range of values    Calculate the variance and standard deviation    Use technology to find the standard deviation    "
},
{
  "id": "subsec-SpreadBasics-2",
  "level": "2",
  "url": "sec-DesStat-Spread.html#subsec-SpreadBasics-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "range "
},
{
  "id": "subsec-SpreadBasics-4",
  "level": "2",
  "url": "sec-DesStat-Spread.html#subsec-SpreadBasics-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "standard deviation "
},
{
  "id": "subsec-SpreadBasics-11",
  "level": "2",
  "url": "sec-DesStat-Spread.html#subsec-SpreadBasics-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "deviation "
},
{
  "id": "subsec-SpreadBasics-12",
  "level": "2",
  "url": "sec-DesStat-Spread.html#subsec-SpreadBasics-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sample variance "
},
{
  "id": "subsec-SpreadCalc-4",
  "level": "2",
  "url": "sec-DesStat-Spread.html#subsec-SpreadCalc-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "1:Edit "
},
{
  "id": "subsec-SpreadCalc-8",
  "level": "2",
  "url": "sec-DesStat-Spread.html#subsec-SpreadCalc-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "1-Var Stats "
},
{
  "id": "subsec-SpreadCalc-10",
  "level": "2",
  "url": "sec-DesStat-Spread.html#subsec-SpreadCalc-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "1-Var Stats "
},
{
  "id": "subsec-SpreadUses-6",
  "level": "2",
  "url": "sec-DesStat-Spread.html#subsec-SpreadUses-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Example: "
},
{
  "id": "subsec-SpreadUses-8",
  "level": "2",
  "url": "sec-DesStat-Spread.html#subsec-SpreadUses-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Example: "
},
{
  "id": "sec-DesStat-Spread-7",
  "level": "2",
  "url": "sec-DesStat-Spread.html#sec-DesStat-Spread-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Summary of formulas and notations "
},
{
  "id": "sec-DesStat-Position",
  "level": "1",
  "url": "sec-DesStat-Position.html",
  "type": "Section",
  "number": "3.3",
  "title": "Measures of Position",
  "body": " Measures of Position  In addition to measures of center and measures of variability of the data, there are measures of position or location within the data. We will investigate percentile ranking, quartiles, outliers, and z-scores in this section.    At the end of this section you will be able to     Determine percentile ranking for a value    Calculate the quartiles and interquartile range    Determine if a data has outliers    Calculate the z-score to compare values      Understanding the Basics     Percentiles   Along with the center and the variability, another useful numerical measure is the ranking of a value in the data. A percentile is ranking measurements used to indicate the position of an individual in a group to the rest of the values. Percentiles divide the data set into 100 equal groups. Many standardized tests give the results as a percentile. Doctors also use percentiles to track a child’s growth.  The percentile corresponding to a given X value is computed by      Example: A teacher gives a 20-point test to ten students. The scores are 18, 15, 12, 6, 8, 12, 3, 5, 20, 10. Find the percentile rank of the student who scored 12.   Solution: There are 5 scores below 12. There are 2 scores at 12. There is a total of 10 scores. The percentile ranking thus the 60th percentile. This student did better than or equal to 60% of the classmates on the test.    Percentile A teacher gives a 20-point quiz to ten students. The scores are 16, 15, 16, 6, 8, 16, 3, 5, 20, 10. Find the percentile ranking of the student who scored 16.  There are 6 scores below 16. There are 3 scores at 16. There is a total of 10 scores. The percentile ranking thus the 75th percentile. This student did better than or equal to 75% of the classmates on the quiz.   The kth percentile is the data value that has k% of the data at or below that value.   Example: Carlos scored a 1350 on the SAT exam and the report said he was at the 89th percentile. What does this indicate?   Solution: Carlos scored the same or better than 89% of the students taking the SAT that year nationwide.    Percentile Interpretation  Charles scored at the 53rd percentile on the ALEKS Math Assessment when he enrolled at UNC. What does this indicate?     Charles scored the same or better than 53% of the students taking the Assessment.    Correct.      Charles scored 53% on the assessment.    No, we want the percentile ranking not his score.      Charles scored better than 53% of the students on the assessment.    No, it's better than or equal to 53% of the students.        Quartiles  There are special percentiles called quartiles. Quartiles are numbers that divide the data into four equal parts. One fourth (or a quarter) of the data falls between consecutive quartile values. To find the quartiles, we find the median and the divide each half of the data into two parts again.    Sort the data in increasing order.    Find the median, this divides the data list into 2 halves, thus the 50th percentile.    Find the median of the data below the median. This value is Q1 which is the 25th percentile.    Find the median of the data above the median. This value is Q3 which is the 75th percentile.     Example: The data represents the number of credit hours a sample of seven students are taking this semester: 15, 13, 6, 5, 12, 18, 20.   Solution:   Put the values in order and find the median: 5, 6, 12, 13 , 15, 18, 20  Find Q1 of the values below 13: thus 5, 6 , 12  Find Q3 of the values above 13: thus 15, 18 , 20  Thus Q1 = 6, Q2 = 13, Q3 = 15.  If you record the quartiles together with the maximum and minimum you have five-number summary. The five-number summary consists of the minimum, the first quartile (Q1), the median (Q2), the third quartile (Q3), and the maximum (in that order). These are the values that make up the boxplot.  The interquartile range (IQR) , is the difference between the first and third quartiles, thus which represents the middle 50% of the data. If the IQR is large the data is spread out and if the IQR is small the data is closer together.   Example: The data represents the number of credit hours a sample of seven students are taking this semester: 15, 13, 6, 5, 12, 18, 20, 25  Solution: Put the values in order and find the median 5, 6, 12, 13, | 15, 18, 20, 25 which occurs between 13 and 15 since there are an even number of values, thus the median = 14. Q1 is between 6 and 12 and Q3 is between 18 and 20, thus Q1 = 9 and Q3 = 19. Therefore, 50% of the students in ths sample are taking between 9 and 19 credits. The IQR = 19 - 9 = 10, thus the spread is 10 credits.     Outliers  Data should be checked for extremely high or extremely low values when compared to the rest of the data, these are known as outliers . Often you see the outliers as the starred values in a boxplot. To determine the possible outliers using the IQR method, we look at any value that is:     less than or     more than .     Example: A sample of seven students identified how many pairs of shoes they have in their closet: 6, 10, 15, 13, 4, 18, 50. Check for any outliers.  Intuitively we can see that 50 is much larger than the rest of the data, thus we anticipate it being an outlier. But we check mathematically.  First, find the Quartiles: 4, 6 , 10, 13 , 15, 18 , 50  Second, find IRQ= 18 - 6 = 12  Lower extreme = 6 - 1.5(12) = -12 thus no lower outliers since no value below -12.  Upper extreme = 18 + 1.5(12) = 36 thus 50 pairs of shoes is an outlier since it is more than 36. So having 50 pairs of shoes is atypical for this group.     Check for Outliers   A sample of ten students identified their weight in pounds: 162, 138, 140, 238, 120, 175, 165, 145, 157, 220. Are there any outliers in the sample?    Yes, 220 and 238 are both outliers    First, find quartiles: 120, 138, 140 , 145, 157, M=159.5 162, 165, 175 , 220, 238  Find IQR = 175 - 140 = 35  Lower extreme = 140-1.5x35 = 87.5 so no lower outliers.  Upper extreme = 175+1.5x35 = 192.5 thus 220 and 238 are both outliers.       z-score  There is an old saying that You can't compare apples to oranges. But with statistics, we can in a way. There are times when we want to compare how a particular value is in relation to the mean. A z-score or standard score for a value is obtained by subtracting the mean from the value and dividing the result by the standard deviation. The z-score represents the number of standard deviations that a data value falls above or below the mean. This allows us to compare two different groups of data to determine which did better in relation to the mean (thus comparing apples to oranges). If the z-score is positive then it is above the mean, and if the z-score is negative it is below the mean. The formula is:      Example: A student scored 88 on a calculus test that had a mean of 75 and a standard deviation of 8. The same student scored 30 on a biology quiz with a mean of 25 and standard deviation of 4. Compare the student's relative positions on the two tests by finding the z-scores.  Calculus test standard deviation above average.  Biology quiz standard deviation above average.  Thus the student did better on the calculus test since the z-score is higher in comparison.  Compare z-scores Compare the three test scores to see who did the best overall in terms of z-scores. Angela earned a 200 on an aptitude test which has a mean of 220 and a standard deviation of 15. Bryce scored 75 on the math test with a mean of 72 and standard deviation of 8. Chris earned a 78 on chemistry test with a mean of 81 and standard deviation of 10.  Angela which is below average.  Bryce which is slightly above average.  Chris which is slightly below average. Therefore Bruce did the best since he has the highest positive score. Angela did the worst overall since she has the lowest z-score (most negative).     Application   "
},
{
  "id": "sec-DesStat-Position-3",
  "level": "2",
  "url": "sec-DesStat-Position.html#sec-DesStat-Position-3",
  "type": "Objectives",
  "number": "3.3",
  "title": "",
  "body": "  At the end of this section you will be able to     Determine percentile ranking for a value    Calculate the quartiles and interquartile range    Determine if a data has outliers    Calculate the z-score to compare values    "
},
{
  "id": "subsec-PositionBasics-3",
  "level": "2",
  "url": "sec-DesStat-Position.html#subsec-PositionBasics-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Percentiles "
},
{
  "id": "subsec-PositionBasics-4",
  "level": "2",
  "url": "sec-DesStat-Position.html#subsec-PositionBasics-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "percentile "
},
{
  "id": "subsec-PositionBasics-7",
  "level": "2",
  "url": "sec-DesStat-Position.html#subsec-PositionBasics-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Example: "
},
{
  "id": "subsec-PositionBasics-10",
  "level": "2",
  "url": "sec-DesStat-Position.html#subsec-PositionBasics-10",
  "type": "Checkpoint",
  "number": "3.3.1",
  "title": "Percentile.",
  "body": "Percentile A teacher gives a 20-point quiz to ten students. The scores are 16, 15, 16, 6, 8, 16, 3, 5, 20, 10. Find the percentile ranking of the student who scored 16.  There are 6 scores below 16. There are 3 scores at 16. There is a total of 10 scores. The percentile ranking thus the 75th percentile. This student did better than or equal to 75% of the classmates on the quiz.  "
},
{
  "id": "subsec-PositionBasics-12",
  "level": "2",
  "url": "sec-DesStat-Position.html#subsec-PositionBasics-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Example: "
},
{
  "id": "Percentile-matching",
  "level": "2",
  "url": "sec-DesStat-Position.html#Percentile-matching",
  "type": "Checkpoint",
  "number": "3.3.2",
  "title": "Percentile Interpretation.",
  "body": "Percentile Interpretation  Charles scored at the 53rd percentile on the ALEKS Math Assessment when he enrolled at UNC. What does this indicate?     Charles scored the same or better than 53% of the students taking the Assessment.    Correct.      Charles scored 53% on the assessment.    No, we want the percentile ranking not his score.      Charles scored better than 53% of the students on the assessment.    No, it's better than or equal to 53% of the students.    "
},
{
  "id": "subsec-PositionBasics-17",
  "level": "2",
  "url": "sec-DesStat-Position.html#subsec-PositionBasics-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Quartiles "
},
{
  "id": "subsec-PositionBasics-18",
  "level": "2",
  "url": "sec-DesStat-Position.html#subsec-PositionBasics-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Quartiles "
},
{
  "id": "subsec-PositionBasics-20",
  "level": "2",
  "url": "sec-DesStat-Position.html#subsec-PositionBasics-20",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Example: "
},
{
  "id": "subsec-PositionBasics-26",
  "level": "2",
  "url": "sec-DesStat-Position.html#subsec-PositionBasics-26",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "five-number summary "
},
{
  "id": "subsec-PositionBasics-27",
  "level": "2",
  "url": "sec-DesStat-Position.html#subsec-PositionBasics-27",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "interquartile range (IQR) "
},
{
  "id": "subsec-PositionBasics-28",
  "level": "2",
  "url": "sec-DesStat-Position.html#subsec-PositionBasics-28",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Example: "
},
{
  "id": "subsec-PositionBasics-31",
  "level": "2",
  "url": "sec-DesStat-Position.html#subsec-PositionBasics-31",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Outliers "
},
{
  "id": "subsec-PositionBasics-32",
  "level": "2",
  "url": "sec-DesStat-Position.html#subsec-PositionBasics-32",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "outliers "
},
{
  "id": "subsec-PositionBasics-34",
  "level": "2",
  "url": "sec-DesStat-Position.html#subsec-PositionBasics-34",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Example: "
},
{
  "id": "subsec-PositionBasics-41",
  "level": "2",
  "url": "sec-DesStat-Position.html#subsec-PositionBasics-41",
  "type": "Example",
  "number": "3.3.3",
  "title": "Check for Outliers.",
  "body": " Check for Outliers   A sample of ten students identified their weight in pounds: 162, 138, 140, 238, 120, 175, 165, 145, 157, 220. Are there any outliers in the sample?    Yes, 220 and 238 are both outliers    First, find quartiles: 120, 138, 140 , 145, 157, M=159.5 162, 165, 175 , 220, 238  Find IQR = 175 - 140 = 35  Lower extreme = 140-1.5x35 = 87.5 so no lower outliers.  Upper extreme = 175+1.5x35 = 192.5 thus 220 and 238 are both outliers.   "
},
{
  "id": "subsec-PositionBasics-43",
  "level": "2",
  "url": "sec-DesStat-Position.html#subsec-PositionBasics-43",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "z-score "
},
{
  "id": "subsec-PositionBasics-44",
  "level": "2",
  "url": "sec-DesStat-Position.html#subsec-PositionBasics-44",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "z-score "
},
{
  "id": "subsec-PositionBasics-46",
  "level": "2",
  "url": "sec-DesStat-Position.html#subsec-PositionBasics-46",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Example: "
},
{
  "id": "subsec-PositionBasics-50",
  "level": "2",
  "url": "sec-DesStat-Position.html#subsec-PositionBasics-50",
  "type": "Checkpoint",
  "number": "3.3.4",
  "title": "Compare z-scores.",
  "body": "Compare z-scores Compare the three test scores to see who did the best overall in terms of z-scores. Angela earned a 200 on an aptitude test which has a mean of 220 and a standard deviation of 15. Bryce scored 75 on the math test with a mean of 72 and standard deviation of 8. Chris earned a 78 on chemistry test with a mean of 81 and standard deviation of 10.  Angela which is below average.  Bryce which is slightly above average.  Chris which is slightly below average. Therefore Bruce did the best since he has the highest positive score. Angela did the worst overall since she has the lowest z-score (most negative).  "
},
{
  "id": "sec-DesStat-Regression",
  "level": "1",
  "url": "sec-DesStat-Regression.html",
  "type": "Section",
  "number": "3.4",
  "title": "Linear Regression",
  "body": " Linear Regression  Previously, we used a scatterplot to visually determine whether a relationship exists between two quantitative variables. Next, we want to make predictions about the linear trend found in the scatterplot, this process of fitting a line to a set of data is called linear regression.    At the end of this section you will be able to     Describe the nature of a relationship from scatterplot.    Interpret the correlation coefficient.    Find the linear regression equation.    Predict values using the regression equation.    Find the residual.     Recall in Chapter 2, we used a scatterplot to visually determine whether a relationship exists between two quantitative variables and the correlation coefficient to describe the strength and direction of the relationship. Next, we want to make predictions about the linear trend found in the scatterplot, this is known as linear regression . We create a line that goes through the points to help us make the predictions.  Let us do a quick review. A positive relationship exists when both variables increase while a negative relationship exists when one variable increase and the other variable decreases. The correlation coefficient measures its strength on a scale from -1 to +1.    If there is a strong positive linear relationship, the correlation coefficient is closer to +1.    If there is a strong negative linear relationship, the correlation coefficient is closer to -1.    If there is a moderate linear relationship, the correlation coefficient is around 0.5 or -0.5.    If there is no relationship or if there is a weak relationship, the correlation coefficient is around 0.    The regression line is known as the line of best fit since it minimizes the vertical distance each point is from the regression line. We will focus on linear regression where , where a is the y-intercept and b is the slope of the line. The sign of the slope will match the sign of the correlation coefficient.  The regression line provides a model of a linear association between two quantitative variables to give a predicted value of the response (dependent) variable, based on a given value of in the explanatory (independent) variable.  We are going to continue our investigation of the relationship between a person's height and his\/her shoe size using the first day survey. If we know a person's height, are we able to predict his\/her shoe size? Or if we know a person’s shoe size, can we predict his\/her height? Let’s find out.  First, let's review the scatterplot and the correlation value.   Image of Scatterplot for Shoe Size and Height   Shoe size and Height Scatterplot.    The scatterplot shows a strong positive correlation with r = 0.913. As the shoe sizes increase the student heights are also increasing. This matches the positive slope of 2.014. The slope tells us the height increases by 2 inches for each 1 change in shoe size. The scatterplot is scaled based on the data values, with shoe size ranging from 6 to 15 and heights between 59 inches and 78 inches. If we extend the graph to shoe size 0, we get the y-intercept of 48.396 inches. Thus, the linear regression equation to predict height is where is the student shoe size.  If you click on the box Show Regression Line in StatKey, the line goes through the middle if our points by minimizing their distances to it.   Image of regression line for Shoe Size and Height   Shoe size and Height regression line.     Making Predictions    Example: Predict a person's height if the person has a size 8 shoe using the regression equation. Does this seem reasonable given the data in the scatterplot?  Solution: Using the linear regression equation So we predict the person's height to be 65.5 inches or 5 feet 5.5 inches tall. This does align with the scatter plot. On the x-axis we start at size 8, go up to the regression line then move to the left to find the height around 65 inches.   Example: Predict a person's height for shoe size 11 using the regression equation. Does this seem reasonable given the data in the scatterplot?  Solution: Using the linear regression equation So we predict the height to be 70.55 inches or 5 feet 10.6 inches tall. This does align with the scatter plot. On the x-axis we start at size 11, go up to the regression line then move to the left to find the height around 71 inches.  Suppose a person is 6 feet tall (72 inches), predict his\/her shoe size using the current regression equation. Make sure you are solving for the correct variable.  Solution: Now we use and we solve for . Subtract 48.396 from both sides of the equation and then divide by 2.014 to get shoe size.  Estimating the value from the scatterplot, we start with the y-axis where y=72 inches, we go right until we land on the regression line and drop down to x = 11.5 shoe size.  Now lets switch the axes and compare the new scatterplot. The height is now the x-axis and the shoe size is along the y-axis.   Image of regression line for Height on x-axis   Height regression line.    We have the same correlation coefficient of r = 0.913 showing a strong positive linear relationship. But the linear regression equation is now where is the height and is the shoe size. The slope tells us that the shoe size increases by .414 for each additional inch in height. Notice that for a height of 0 inches the predicted shoe size is -18.683.  Predicting the shoe size for someone 72 inches becomes which is around size 11 shoe. Notice how the two estimates are slightly different.   Example: From the data file, the person who was 72 inches tall has a shoe size of 12. The residual using the second regression equation gave us the predicted size of 11.125. Thus the residual , the actual shoe size is almost one size greater than the estimate. The first regression equation gave a predicted size of 11.7, thus the residual is which is closer to the actual value.  Warning: the prediction is only as good as our graph. The y-intercept value often does not make sense in the context, but helps us to make our estimates within the scatterplot (knows as interpolation). Making predictions beyond the bounds of the data, known as extrapolation, can be off. For example, we do not want to predict former UNC basketball player Dalton Knecht's shoe size using his height of 6 feet 6 inches (78 inches) since it goes off the graph. The prediction would not be reliable.  The difference between the actual value y and the predicted value is called a residual . This lets us know how far off our prediction is.   Example: From the data file, the person who was 72 inches tall has a shoe size of 12. The residual using the second regression equation gave us the predicted size of 11.125. Thus the residual , the actual shoe size is almost one size greater than the estimate. The first regression equation gave a predicted size of 11.7, thus the residual is which is closer to the actual value.   Practice   Now complete the correlation and regression analysis for different scenario.  Seismologists use tools like seismograms to record and analyze earthquake data, including their location, magnitude, depth, and other factors. Seismologists indicate the size of an earthquake in units of magnitude. Some methods are based on body waves (which travel deep within the structure of the earth) and surface waves. Earthquake magnitude is a logarithmic scale meaning the shaking will be 10 times as large during a magnitude 5 earthquake as during a magnitude 4 earthquake.  Suppose a seismologist wanted to know if there was a correlation between the magnitude of an earthquake and its depth at the epicenter (where the earthquake originates, measured in kilometers below the earth’s surface). The data file includes a list of earthquakes that were felt during a one-week period between April 19 and April 25, 2025 around the world, as recorded by the Southern California Earthquake Data Center. Generally, earthquakes with a magnitude of 2.5 can be felt. Use the variables Magnitude and Depth for these earthquakes.  insert the data file   Image of regression line for magnitude and depth of earthquakes   Earthquake regression line.     Correlation   State the correlation coefficient.    Correlation r = 0.473 is a moderate positive relationship (note: this is statistically significant which we will investigate later in the semester).     Nature of the relationship   Describe the nature of the relationship.    As the magnitude of an earthquake increases, its depth below the surface also increases     Slope   Identify the slope when x = magnitude and y = depth.    Slope = 14.78 is positive.     Y-intercept   Identify the y-intercept when x = magnitude and y = depth.    The y-intercept = -23.334 km below surface.     Regression Equation   Identify the regression equation where x = magnitude and y = depth.    Depth = 14.78(magnitude)-23.334 or .     Prediction   Predict the depth of the epicenter for an earthquake with a magnitude of 6.0.     km below surface.     Residual   Find the residual for a 4.8 earthquake with a depth of 62.7 km from El Salvador.    Predict km below surface. Residual km deeper than predicted .    "
},
{
  "id": "sec-DesStat-Regression-3",
  "level": "2",
  "url": "sec-DesStat-Regression.html#sec-DesStat-Regression-3",
  "type": "Objectives",
  "number": "3.4",
  "title": "",
  "body": "  At the end of this section you will be able to     Describe the nature of a relationship from scatterplot.    Interpret the correlation coefficient.    Find the linear regression equation.    Predict values using the regression equation.    Find the residual.    "
},
{
  "id": "sec-DesStat-Regression-4",
  "level": "2",
  "url": "sec-DesStat-Regression.html#sec-DesStat-Regression-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear regression "
},
{
  "id": "ShoeHeightScatterplot",
  "level": "2",
  "url": "sec-DesStat-Regression.html#ShoeHeightScatterplot",
  "type": "Figure",
  "number": "3.4.1",
  "title": "",
  "body": " Image of Scatterplot for Shoe Size and Height   Shoe size and Height Scatterplot.   "
},
{
  "id": "ShoeHeightRegression",
  "level": "2",
  "url": "sec-DesStat-Regression.html#ShoeHeightRegression",
  "type": "Figure",
  "number": "3.4.2",
  "title": "",
  "body": " Image of regression line for Shoe Size and Height   Shoe size and Height regression line.   "
},
{
  "id": "sec-DesStat-Regression-15",
  "level": "2",
  "url": "sec-DesStat-Regression.html#sec-DesStat-Regression-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Making Predictions "
},
{
  "id": "HeightShoeRegression",
  "level": "2",
  "url": "sec-DesStat-Regression.html#HeightShoeRegression",
  "type": "Figure",
  "number": "3.4.3",
  "title": "",
  "body": " Image of regression line for Height on x-axis   Height regression line.   "
},
{
  "id": "sec-DesStat-Regression-29",
  "level": "2",
  "url": "sec-DesStat-Regression.html#sec-DesStat-Regression-29",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "residual "
},
{
  "id": "sec-DesStat-Regression-31",
  "level": "2",
  "url": "sec-DesStat-Regression.html#sec-DesStat-Regression-31",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Practice "
},
{
  "id": "EarthquakeRegression",
  "level": "2",
  "url": "sec-DesStat-Regression.html#EarthquakeRegression",
  "type": "Figure",
  "number": "3.4.4",
  "title": "",
  "body": " Image of regression line for magnitude and depth of earthquakes   Earthquake regression line.   "
},
{
  "id": "sec-DesStat-Regression-37",
  "level": "2",
  "url": "sec-DesStat-Regression.html#sec-DesStat-Regression-37",
  "type": "Example",
  "number": "3.4.5",
  "title": "Correlation.",
  "body": " Correlation   State the correlation coefficient.    Correlation r = 0.473 is a moderate positive relationship (note: this is statistically significant which we will investigate later in the semester).   "
},
{
  "id": "sec-DesStat-Regression-38",
  "level": "2",
  "url": "sec-DesStat-Regression.html#sec-DesStat-Regression-38",
  "type": "Example",
  "number": "3.4.6",
  "title": "Nature of the relationship.",
  "body": " Nature of the relationship   Describe the nature of the relationship.    As the magnitude of an earthquake increases, its depth below the surface also increases   "
},
{
  "id": "sec-DesStat-Regression-39",
  "level": "2",
  "url": "sec-DesStat-Regression.html#sec-DesStat-Regression-39",
  "type": "Example",
  "number": "3.4.7",
  "title": "Slope.",
  "body": " Slope   Identify the slope when x = magnitude and y = depth.    Slope = 14.78 is positive.   "
},
{
  "id": "sec-DesStat-Regression-40",
  "level": "2",
  "url": "sec-DesStat-Regression.html#sec-DesStat-Regression-40",
  "type": "Example",
  "number": "3.4.8",
  "title": "Y-intercept.",
  "body": " Y-intercept   Identify the y-intercept when x = magnitude and y = depth.    The y-intercept = -23.334 km below surface.   "
},
{
  "id": "sec-DesStat-Regression-41",
  "level": "2",
  "url": "sec-DesStat-Regression.html#sec-DesStat-Regression-41",
  "type": "Example",
  "number": "3.4.9",
  "title": "Regression Equation.",
  "body": " Regression Equation   Identify the regression equation where x = magnitude and y = depth.    Depth = 14.78(magnitude)-23.334 or .   "
},
{
  "id": "sec-DesStat-Regression-42",
  "level": "2",
  "url": "sec-DesStat-Regression.html#sec-DesStat-Regression-42",
  "type": "Example",
  "number": "3.4.10",
  "title": "Prediction.",
  "body": " Prediction   Predict the depth of the epicenter for an earthquake with a magnitude of 6.0.     km below surface.   "
},
{
  "id": "sec-DesStat-Regression-43",
  "level": "2",
  "url": "sec-DesStat-Regression.html#sec-DesStat-Regression-43",
  "type": "Example",
  "number": "3.4.11",
  "title": "Residual.",
  "body": " Residual   Find the residual for a 4.8 earthquake with a depth of 62.7 km from El Salvador.    Predict km below surface. Residual km deeper than predicted .   "
},
{
  "id": "BasicProb",
  "level": "1",
  "url": "BasicProb.html",
  "type": "Section",
  "number": "4.1",
  "title": "Basic Probability",
  "body": " Basic Probability    At the end of this section you will able to:    Determine the probabilty of a single event.    Identify the sample space of an event.    Determine if outcomes are equally likely.    Compare experimental probabilty with theoretical probabilty.      In this chapter we will learn a little about probability. Many people are familiar with probability from playing games of chance, such as flipping coins, rolling dice and playing cards. We will use several of these examples to help explain the rules of probability.  The questions that probability can help with are your chances that the car you are buying will need more maintenance, your chances of passing a class, your chances of winning the lottery, your chances of being in a car accident. The chance of winning the lottery is very small, yet many people will spend the money on lottery tickets. Yet, if instead they saved the money that they spend on the lottery, they would have more money. In general, events that have a low probability (under 5%) are unlikely to occur. Whereas if an event has a high probability of happening (over 80%), then there is a good chance that the event will happen.  First let us review some definitions to help us understand probability.   Experiment is an activity that has specific results that can occur, but the result is unknown before you begin. Such as flipping a coin.  The outcomes are the results of an experiment. The outcomes from flipping a coin is head or tail.  An event is a set of certain outcomes of an experiment that you want to have happen. So if I want to know the likelihood of getting heads, getting heads is the event I want to happen.  The sample space is the collection of all possible outcomes of the experiment. For a single coin toss the sample space is the same as heads or tails. But if I toss two coins, say a penny and nickel, then the sample space includes all possible outcomes: head on penny and head on nickel, head on penny but tail on nickel, tail on penny with head on nickel, or tails on both penny and nickel. Now there are four outcomes in the sample space. A tree diagrams helps us see all these outcomes.  Outcomes Suppose that the experiment is rolling a single die. List the outcomes and sample space.  The outcomes are the die number 1, 2, 3, 4, 5, 6. The sample space is the set {1, 2, 3, 4, 5, 6}.   To determine the likelihood of flipping heads, we need to perform the experiment. Suppose you toss a coin 10 times and heads landed up 4 times. Based on this experiment, the probability of getting heads is 4 out of 10 tries or 4\/10 = 2\/5 =.40 or 40%. Probabilities can be written as decimals, fractions, or percentages. Suppose you toss the coin 1000 times and heads occurred 513 times. Thus the probability of heads is now 513\/100 = 51.3% of the time. This is an example of experimental probability since the value was found by actually doing the experiment.  The approximate probability of an event A, written as , is     Most likely you know that the probability of flipping a heads is ½ since there are two sides to the coin. This illustrates theoretical probability which is based on the sample space. But it assumes that all outcomes are equally likely to occur.  Consider the experiment of spinning the spinner below. There are four possible outcomes: red, blue, green, and yellow. We will expect the color blue to be spun about ¼ of the time if we spin it many times. The probability is indicated by writing P(blue) = ¼.   Spinner with equal outcomes   circlular spinner split into four equal parts.    Since each color represents the same fraction of the circle, we refer to them being equally likely to occur since the probability is the same. Just as rolling any number on a fair die is also equally likely at 1\/6 since there are six sides.   Spinner with unequal outcomes   circlular spinner split into four equal of different size.    Spinner Probabilities Find the following probabilities for the spinner above. a. Probability of spinning red b. Probability of spinning yellow c. Probability of spinning green  a. P(red)=25%, b. P(yellow) = 38%, and c. P(green) = 13%   More likely Which color is most likely to occur on the spinner? Why.  P(yellow) = 38%, thus yellow is most likely to occur since it has the highest probability   Spinner Probabilities Find the following probabilities for the spinner above. a. Probability of spinning red or blue b. Probability of spinning yellow or green  P(red or blue) = 50% since this represents half the circle  P(yellow or green) = 38+12 = 50%   Marbles Find the probability of selecting a green marble on one draw from a box containing five green marbles and seven blue marbles.  Since there are 5 green marbles and a total of 12 marbles in the box, the probability is P(green)=5\/12.   There are several rules regarding the possible values in probability. The probability of an event A is any number between and including 0 and 1, when written as decimals. If an event cannot occur the probability is 0, since no chance of it occurring. While an event that is certain to occur the probability is 1, which is 100%.   For example, when rolling a fair six-sided die, the probability of each event is 1\/6 = 0.167 since the sample space is the set {1, 2, 3, 4, 5, 6}. The probability of rolling an 8 on this die would be 0 since it is not in the sample space. The sum of the probabilities of the outcomes in the sample space is 1, which represents 100% of the events.  Probability Rules Find the following probabilities using these rules . a. Drawing a red marble from a bag containing three red and two blue marbles. b. Drawing a green marble from a bag containing only green marbles. c. Drawing a black marble from a bag containing only blue marbles.  a. P(red) = 3\/5 = 0.60 = 60% since 3 of the 5 marbles are red.  b. P(green) = 1 or 100% since all the marbles are green.  c. P(black) = 0 since black is not in the sample space of only blue marbles   Suppose you want to know the probability that an event will not occur, this uses the complement of the event. When we roll a die, we know that sample space consists of the outcomes 1, 2, 3, 4, 5, 6. The probability of rolling a 3 is . The probability of not rolling a 3 is since there are 5 outcomes that are not a 3. Since the sum of the outcomes in the sample space is 1 or 100%, we can find the complement by subtracting the probability of the event from 1.  The complement of an event E is the set of outcomes in the sample space that are not included in the outcomes of the event E. The complement of E is .  Complement Find the complement of rolling an even number on a fair six-sided die.  P(even) = 3\/6=0.5 for the event of 2, 4, 6. So the complement will be not even (thus odd numbers) therefore P(not even) = 1-0.5 = 0.5 which are the events 1, 3, 5.   Complement Find the complement of drawing a red marble from a bag containing 3 red marbles and 5 blue marbles.  P(red)=3\/8=0.375 thus the complement is P(not red) which is the same as the 5\/8 that are blue in the bag.   So far we have focused on simple events where we focus on just one outcome. When we found the probability of getting an even number on a dice roll, we are working with compound events since there are three outcomes we are considering. This can be extended to multiple experiments – such as tossing two coins or rolling two dice. This will increase our sample space.  We can use tree diagrams to help us find the sample space from compound events. A tree diagram is a device consisting of line segments branching from a starting point and from each outcome for each event. We read across the rows to find all possible outcomes for the sample space.  Lets find the sample space for tossing two coins, say a penny and nickel. If we toss the penny first, we have two outcomes of heads or tails. So we choose a starting point and draw two lines to represent the two outcomes and list them. When we toss the nickel, we also have two outcomes. So we draw two lines from EACH of the previous outcomes to represent the second event and list the outcomes. As we read along the tree diagram, we have the sample space that includes all possible outcomes: head on penny and head on nickel, head on penny but tail on nickel, tail on penny with head on nickel, or tails on both penny and nickel. Now there are four outcomes in the sample space.   Tree diagram for two coin tosses   four outcomes since four branches.    With the four outcomes, which are equally likely to happen due to the fair coins, the probability is ¼ for each. The probability of getting at least one head on either of the tosses is ¾ since three of the four outcomes have a head. The probability of getting exactly one head on either toss is ½ for head-tail or tail-head.  Tree diagrams can be used for multiple events. Suppose you flip a penny, nickel and dime. Make a tree diagram to list all possible outcomes. Hint: from your previous tree diagram, draw two lines from each previous branch to represent the outcomes for the dime.  Tree Diagram Make a tree diagram to list all possible outcomes for tossing three fair coins.  There are eight outcomes as shown below.   Tree diagram for three coin tosses   four outcomes since four branches.     Probabilities from tree diagram Find the following probabilities using your tree diagram for three coins. a. getting three heads b. getting at least two heads c. getting exactly two tails d. getting four tails  a. P( three heads) = 1\/8  b. P(at least two heads) = 4\/8 = ½  c. P(exactly two tails) = 3\/8  d. P(four tails) = 0 since not in sample space   Next, let us look at the standard deck of playing cards. There are four suits: diamonds, clubs, hearts, and spades. Half the cards are red and half are back. The are 13 numbered cards for each suit consisting of two thru ten, an ace, and the face cards as jack, queen, and king. This makes the standard deck of 52 cards.   Standard deck of cards   four suits with 13 numbered cards in deck.    Sample Space How many outcomes are in the sample space for a standard deck of cards?  There are 52 outcomes in a standard deck. Each card represents an outcome.   Spades What is the probability of getting a spade drawing one card randomly from a deck?  There are 13 spades in a deck of 52 cards, thus P(spade)=13\/52=1\/4 .   Jack What is the probability of getting a Jack drawing one card randomly from a deck?  There are 4 jacks in a deck of 52 cards, thus P(jack)=4\/52=1\/13=0.077   Complement What is the probability of not getting an Ace by drawing one card randomly from a deck?  P(Ace)=4\/52 thus P(not Ace) = 1-4\/52 = 0.923   Supplemental links  Online Spinner:   Online Dice:    Practice Problems   Blood Probabilities Suppose in a sample of 50 people the following blood types were recorded: 19 Type O, 22 Type A, 6 Type B, and 3 Type AB. Find the probability of getting the specified blood type if one person is selected at random from this sample. a. Type A blood. b. Type O or Type B. c. Not type AB.  a. P(A)=22\/50  b. P(O or B) = 19\/50 + 6\/50 = 25\/50  c. P(not AB) = 1-3\/50 = 47\/50 is the complement   Rain Suppose the weather person predicted the probability of it raining today is 0.45. What is the probability of it not raining?  Since not raining is the complement of raining, then P(not rain) = 1-P(rain) = 1-.45=0.55   COVID Moderna estimated the effectiveness of the COVID19 vaccine at 95% for preventing COVID. What was the probability of getting COVID if you had the vaccine?  Using the complement, P(COVID) = 1-P(vaccine)=1-.95=0.05   "
},
{
  "id": "BasicProb-2",
  "level": "2",
  "url": "BasicProb.html#BasicProb-2",
  "type": "Objectives",
  "number": "4.1",
  "title": "",
  "body": "  At the end of this section you will able to:    Determine the probabilty of a single event.    Identify the sample space of an event.    Determine if outcomes are equally likely.    Compare experimental probabilty with theoretical probabilty.     "
},
{
  "id": "BasicProb-6",
  "level": "2",
  "url": "BasicProb.html#BasicProb-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Experiment "
},
{
  "id": "BasicProb-7",
  "level": "2",
  "url": "BasicProb.html#BasicProb-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "outcomes "
},
{
  "id": "BasicProb-8",
  "level": "2",
  "url": "BasicProb.html#BasicProb-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "event "
},
{
  "id": "BasicProb-9",
  "level": "2",
  "url": "BasicProb.html#BasicProb-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sample space "
},
{
  "id": "BasicProb-10",
  "level": "2",
  "url": "BasicProb.html#BasicProb-10",
  "type": "Checkpoint",
  "number": "4.1.1",
  "title": "Outcomes.",
  "body": "Outcomes Suppose that the experiment is rolling a single die. List the outcomes and sample space.  The outcomes are the die number 1, 2, 3, 4, 5, 6. The sample space is the set {1, 2, 3, 4, 5, 6}.  "
},
{
  "id": "BasicProb-11",
  "level": "2",
  "url": "BasicProb.html#BasicProb-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "experimental probability "
},
{
  "id": "BasicProb-14",
  "level": "2",
  "url": "BasicProb.html#BasicProb-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "theoretical probability "
},
{
  "id": "ProbSpinner1",
  "level": "2",
  "url": "BasicProb.html#ProbSpinner1",
  "type": "Figure",
  "number": "4.1.2",
  "title": "",
  "body": " Spinner with equal outcomes   circlular spinner split into four equal parts.   "
},
{
  "id": "BasicProb-17",
  "level": "2",
  "url": "BasicProb.html#BasicProb-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equally likely "
},
{
  "id": "ProbSpinner2",
  "level": "2",
  "url": "BasicProb.html#ProbSpinner2",
  "type": "Figure",
  "number": "4.1.3",
  "title": "",
  "body": " Spinner with unequal outcomes   circlular spinner split into four equal of different size.   "
},
{
  "id": "BasicProb-19",
  "level": "2",
  "url": "BasicProb.html#BasicProb-19",
  "type": "Checkpoint",
  "number": "4.1.4",
  "title": "Spinner Probabilities.",
  "body": "Spinner Probabilities Find the following probabilities for the spinner above. a. Probability of spinning red b. Probability of spinning yellow c. Probability of spinning green  a. P(red)=25%, b. P(yellow) = 38%, and c. P(green) = 13%  "
},
{
  "id": "BasicProb-20",
  "level": "2",
  "url": "BasicProb.html#BasicProb-20",
  "type": "Checkpoint",
  "number": "4.1.5",
  "title": "More likely.",
  "body": "More likely Which color is most likely to occur on the spinner? Why.  P(yellow) = 38%, thus yellow is most likely to occur since it has the highest probability  "
},
{
  "id": "BasicProb-21",
  "level": "2",
  "url": "BasicProb.html#BasicProb-21",
  "type": "Checkpoint",
  "number": "4.1.6",
  "title": "Spinner Probabilities.",
  "body": "Spinner Probabilities Find the following probabilities for the spinner above. a. Probability of spinning red or blue b. Probability of spinning yellow or green  P(red or blue) = 50% since this represents half the circle  P(yellow or green) = 38+12 = 50%  "
},
{
  "id": "BasicProb-22",
  "level": "2",
  "url": "BasicProb.html#BasicProb-22",
  "type": "Checkpoint",
  "number": "4.1.7",
  "title": "Marbles.",
  "body": "Marbles Find the probability of selecting a green marble on one draw from a box containing five green marbles and seven blue marbles.  Since there are 5 green marbles and a total of 12 marbles in the box, the probability is P(green)=5\/12.  "
},
{
  "id": "BasicProb-25",
  "level": "2",
  "url": "BasicProb.html#BasicProb-25",
  "type": "Checkpoint",
  "number": "4.1.8",
  "title": "Probability Rules.",
  "body": "Probability Rules Find the following probabilities using these rules . a. Drawing a red marble from a bag containing three red and two blue marbles. b. Drawing a green marble from a bag containing only green marbles. c. Drawing a black marble from a bag containing only blue marbles.  a. P(red) = 3\/5 = 0.60 = 60% since 3 of the 5 marbles are red.  b. P(green) = 1 or 100% since all the marbles are green.  c. P(black) = 0 since black is not in the sample space of only blue marbles  "
},
{
  "id": "BasicProb-27",
  "level": "2",
  "url": "BasicProb.html#BasicProb-27",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "complement "
},
{
  "id": "BasicProb-28",
  "level": "2",
  "url": "BasicProb.html#BasicProb-28",
  "type": "Checkpoint",
  "number": "4.1.9",
  "title": "Complement.",
  "body": "Complement Find the complement of rolling an even number on a fair six-sided die.  P(even) = 3\/6=0.5 for the event of 2, 4, 6. So the complement will be not even (thus odd numbers) therefore P(not even) = 1-0.5 = 0.5 which are the events 1, 3, 5.  "
},
{
  "id": "BasicProb-29",
  "level": "2",
  "url": "BasicProb.html#BasicProb-29",
  "type": "Checkpoint",
  "number": "4.1.10",
  "title": "Complement.",
  "body": "Complement Find the complement of drawing a red marble from a bag containing 3 red marbles and 5 blue marbles.  P(red)=3\/8=0.375 thus the complement is P(not red) which is the same as the 5\/8 that are blue in the bag.  "
},
{
  "id": "BasicProb-30",
  "level": "2",
  "url": "BasicProb.html#BasicProb-30",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "simple events compound events "
},
{
  "id": "BasicProb-31",
  "level": "2",
  "url": "BasicProb.html#BasicProb-31",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tree diagram "
},
{
  "id": "TwoCoinToss",
  "level": "2",
  "url": "BasicProb.html#TwoCoinToss",
  "type": "Figure",
  "number": "4.1.11",
  "title": "",
  "body": " Tree diagram for two coin tosses   four outcomes since four branches.   "
},
{
  "id": "BasicProb-36",
  "level": "2",
  "url": "BasicProb.html#BasicProb-36",
  "type": "Checkpoint",
  "number": "4.1.12",
  "title": "Tree Diagram.",
  "body": "Tree Diagram Make a tree diagram to list all possible outcomes for tossing three fair coins.  There are eight outcomes as shown below.   Tree diagram for three coin tosses   four outcomes since four branches.    "
},
{
  "id": "BasicProb-37",
  "level": "2",
  "url": "BasicProb.html#BasicProb-37",
  "type": "Checkpoint",
  "number": "4.1.14",
  "title": "Probabilities from tree diagram.",
  "body": "Probabilities from tree diagram Find the following probabilities using your tree diagram for three coins. a. getting three heads b. getting at least two heads c. getting exactly two tails d. getting four tails  a. P( three heads) = 1\/8  b. P(at least two heads) = 4\/8 = ½  c. P(exactly two tails) = 3\/8  d. P(four tails) = 0 since not in sample space  "
},
{
  "id": "StandardDeck",
  "level": "2",
  "url": "BasicProb.html#StandardDeck",
  "type": "Figure",
  "number": "4.1.15",
  "title": "",
  "body": " Standard deck of cards   four suits with 13 numbered cards in deck.   "
},
{
  "id": "BasicProb-40",
  "level": "2",
  "url": "BasicProb.html#BasicProb-40",
  "type": "Checkpoint",
  "number": "4.1.16",
  "title": "Sample Space.",
  "body": "Sample Space How many outcomes are in the sample space for a standard deck of cards?  There are 52 outcomes in a standard deck. Each card represents an outcome.  "
},
{
  "id": "BasicProb-41",
  "level": "2",
  "url": "BasicProb.html#BasicProb-41",
  "type": "Checkpoint",
  "number": "4.1.17",
  "title": "Spades.",
  "body": "Spades What is the probability of getting a spade drawing one card randomly from a deck?  There are 13 spades in a deck of 52 cards, thus P(spade)=13\/52=1\/4 .  "
},
{
  "id": "BasicProb-42",
  "level": "2",
  "url": "BasicProb.html#BasicProb-42",
  "type": "Checkpoint",
  "number": "4.1.18",
  "title": "Jack.",
  "body": "Jack What is the probability of getting a Jack drawing one card randomly from a deck?  There are 4 jacks in a deck of 52 cards, thus P(jack)=4\/52=1\/13=0.077  "
},
{
  "id": "BasicProb-43",
  "level": "2",
  "url": "BasicProb.html#BasicProb-43",
  "type": "Checkpoint",
  "number": "4.1.19",
  "title": "Complement.",
  "body": "Complement What is the probability of not getting an Ace by drawing one card randomly from a deck?  P(Ace)=4\/52 thus P(not Ace) = 1-4\/52 = 0.923  "
},
{
  "id": "BasicProb-47",
  "level": "2",
  "url": "BasicProb.html#BasicProb-47",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Practice Problems "
},
{
  "id": "BasicProb-48",
  "level": "2",
  "url": "BasicProb.html#BasicProb-48",
  "type": "Checkpoint",
  "number": "4.1.20",
  "title": "Blood Probabilities.",
  "body": "Blood Probabilities Suppose in a sample of 50 people the following blood types were recorded: 19 Type O, 22 Type A, 6 Type B, and 3 Type AB. Find the probability of getting the specified blood type if one person is selected at random from this sample. a. Type A blood. b. Type O or Type B. c. Not type AB.  a. P(A)=22\/50  b. P(O or B) = 19\/50 + 6\/50 = 25\/50  c. P(not AB) = 1-3\/50 = 47\/50 is the complement  "
},
{
  "id": "BasicProb-49",
  "level": "2",
  "url": "BasicProb.html#BasicProb-49",
  "type": "Checkpoint",
  "number": "4.1.21",
  "title": "Rain.",
  "body": "Rain Suppose the weather person predicted the probability of it raining today is 0.45. What is the probability of it not raining?  Since not raining is the complement of raining, then P(not rain) = 1-P(rain) = 1-.45=0.55  "
},
{
  "id": "BasicProb-50",
  "level": "2",
  "url": "BasicProb.html#BasicProb-50",
  "type": "Checkpoint",
  "number": "4.1.22",
  "title": "COVID.",
  "body": "COVID Moderna estimated the effectiveness of the COVID19 vaccine at 95% for preventing COVID. What was the probability of getting COVID if you had the vaccine?  Using the complement, P(COVID) = 1-P(vaccine)=1-.95=0.05  "
},
{
  "id": "ProbRules",
  "level": "1",
  "url": "ProbRules.html",
  "type": "Section",
  "number": "4.2",
  "title": "Probability Rules",
  "body": " Probability Rules    At the end of this section you will able to:    Determine if events are mutually exclusive.    Determine the probability using the rules for “or”, “and”, and “given\"    Use a tree diagram to determine the probability of multiple events      It is not always feasible to conduct an experiment thousands of times to determine the likelihood of events long term, so it would be better to be able to find the probabilities without conducting the experiment. In this section we will focus on probability rules based on the theoretical probabilities .  There is an assumption we must consider with theoretical probability, whether all outcomes in the sample space are equally likely to occur. This means that every outcome has the same chance of happening.  Equally Likely  Which of the following experiments have equally likely outcomes?     Tossing a fair coin.      Rolling loaded dice.    Since the dice is loaded, it will land showing some numbers more often than others, thus not equally likely events.      Pull a ball out of a bag containing 5 red balls and 6 green balls.    Assuming the balls are the same size, then each ball has the same chance of being chosen. The outcomes of this experiment are the individual balls, so each outcome is equally likely. The probability of a specific color is not equally likely since the number of ways the color can occur is different .     First, let us look at the standard deck of playing cards. There are four suits: diamonds, clubs, hearts, and spades. Half the cards are red and half are back. The are 13 numbered cards for each suit consisting of two thru ten, an ace, and the face cards as jack, queen, and king. This makes the standard deck of 52 cards.   Standard deck of cards   four suits with 13 numbered cards in deck.    Hearts If one card is randomly drawn from a deck, what is the probability of drawing a heart?  There are 13 hearts in a deck of 52 cards, thus P(heart)=13\/52=1\/4 .   Queen If one card is randomly drawn from a deck, what is the probability of drawing a Queen?  P(Queen) = 4\/52 = 1\/13 = 0.077   Queen of Hearts If one card is randomly drawn from a deck, what is the probability of drawing the Queen of Hearts?  P(Queen of Hearts) = 1\/52, only one card in the deck meets this condition. This has a low probability of occurring.   not Queen of Hearts If one card is randomly drawn from a deck, what is the probability of not drawing the Queen of Hearts?  P(Queen of Hearts) = 1\/52, thus P(not Queen of Hearts) = 1-1\/52 = 51\/52 is the complement which is likely to happen.   Often with probability we want to investigate more than just one event taking place. Suppose we want to find the probability of drawing a 4 or a face card (which is the Jack, queen, and king). There are four events to consider. Since each of these represent a number card, they are mutually exclusive since they have no outcome in common. But when we want the queen of hearts, we want a queen and a heart card. These are not mutually exclusive since they share the same card.  Two events are mutually exclusive if they cannot occur at the same time. This means if you belong to one group, you are excluded from belonging to another group. If a card is a heart, it is excluded from being a spade, diamond, or club. If a card is a 10, it is excluded from being a 2 or a 5.  Recognizing if events are mutually exclusive can help us use some rules of probability rather than trying to count all the ways the events can occur together. We briefly used this idea in the last section when we look at the spinner. If you spin red, it is excluded from landing on blue, green, or yellow. Thus we were able to add the probabilities together.  When two events A and B are mutually exclusive, the probability that either A or B will occur is   When two events A and B are mutually exclusive, the probability that A and B will occur together is since they cannot occur at the same time.   For example, find the probability of drawing a 5 or 6 from one random draw from a deck of cards. Since 5 and 6 are number cards they are mutually exclusive then the P(5 or 6) =   Also, the probability of drawing one card at random and having it be a 5 and a 6 cannot occur, thus  Queen or King If one card is randomly drawn from a deck, what is the probability of drawing a Queen or King?  P(Queen or King) = 4\/52 +4\/52 = 8\/52 = .01538   Face Card If one card is randomly drawn from a deck, what is the probability of drawing a face card (Jack or Queen or King)?  P(Jack or Queen or King) = 4\/52 +4\/52 +4\/52 = 12\/52 = 0.2308   So, what happens when the events are not mutually exclusive? If we simply add the probabilities together we are double counting some of the events. For example, what is the probability of getting a Spade or an Ace from one draw? There are 13 spades and 4 aces, but the Ace of Spades is counted in both groups, so we need to subtract out the duplicated card.  P(Spade or Ace) 13\/52 + 4\/52 - 1\/52 = 16\/52 = 0.3077.  If we list all the outcomes that meet this condition we have {2S, 3S, 4S, 5S, 6S, 7S, 8S, 9S, 10S, JS, QS, KS, AS, AC, AD, AH} so there are 16 outcomes for this event.  When two events A and B are not mutually exclusive, the probability that either A or B will occur is     Five or Diamond If one card is randomly drawn from a deck, what is the probability of drawing a 5 or a diamond?  P(5 or diamond) = 4\/52 +13\/52 – 1\/52 = 16\/52 = 0.3077   Five or Six or Diamond If one card is randomly drawn from a deck, what is the probability of drawing a 5 or 6 or diamond?  P(5 or 6 or diamond) = 4\/52 +4\/52 + 13\/52 – 2\/52 = 23\/52 = 0.4423 since the 5 of diamonds and 6 of diamonds are repeated the groups     "
},
{
  "id": "ProbRules-2",
  "level": "2",
  "url": "ProbRules.html#ProbRules-2",
  "type": "Objectives",
  "number": "4.2",
  "title": "",
  "body": "  At the end of this section you will able to:    Determine if events are mutually exclusive.    Determine the probability using the rules for “or”, “and”, and “given\"    Use a tree diagram to determine the probability of multiple events     "
},
{
  "id": "EquallyLikely-matching",
  "level": "2",
  "url": "ProbRules.html#EquallyLikely-matching",
  "type": "Checkpoint",
  "number": "4.2.1",
  "title": "Equally Likely.",
  "body": "Equally Likely  Which of the following experiments have equally likely outcomes?     Tossing a fair coin.      Rolling loaded dice.    Since the dice is loaded, it will land showing some numbers more often than others, thus not equally likely events.      Pull a ball out of a bag containing 5 red balls and 6 green balls.    Assuming the balls are the same size, then each ball has the same chance of being chosen. The outcomes of this experiment are the individual balls, so each outcome is equally likely. The probability of a specific color is not equally likely since the number of ways the color can occur is different .    "
},
{
  "id": "StandardDeck",
  "level": "2",
  "url": "ProbRules.html#StandardDeck",
  "type": "Figure",
  "number": "4.2.2",
  "title": "",
  "body": " Standard deck of cards   four suits with 13 numbered cards in deck.   "
},
{
  "id": "ProbRules-8",
  "level": "2",
  "url": "ProbRules.html#ProbRules-8",
  "type": "Checkpoint",
  "number": "4.2.3",
  "title": "Hearts.",
  "body": "Hearts If one card is randomly drawn from a deck, what is the probability of drawing a heart?  There are 13 hearts in a deck of 52 cards, thus P(heart)=13\/52=1\/4 .  "
},
{
  "id": "ProbRules-9",
  "level": "2",
  "url": "ProbRules.html#ProbRules-9",
  "type": "Checkpoint",
  "number": "4.2.4",
  "title": "Queen.",
  "body": "Queen If one card is randomly drawn from a deck, what is the probability of drawing a Queen?  P(Queen) = 4\/52 = 1\/13 = 0.077  "
},
{
  "id": "ProbRules-10",
  "level": "2",
  "url": "ProbRules.html#ProbRules-10",
  "type": "Checkpoint",
  "number": "4.2.5",
  "title": "Queen of Hearts.",
  "body": "Queen of Hearts If one card is randomly drawn from a deck, what is the probability of drawing the Queen of Hearts?  P(Queen of Hearts) = 1\/52, only one card in the deck meets this condition. This has a low probability of occurring.  "
},
{
  "id": "ProbRules-11",
  "level": "2",
  "url": "ProbRules.html#ProbRules-11",
  "type": "Checkpoint",
  "number": "4.2.6",
  "title": "not Queen of Hearts.",
  "body": "not Queen of Hearts If one card is randomly drawn from a deck, what is the probability of not drawing the Queen of Hearts?  P(Queen of Hearts) = 1\/52, thus P(not Queen of Hearts) = 1-1\/52 = 51\/52 is the complement which is likely to happen.  "
},
{
  "id": "ProbRules-13",
  "level": "2",
  "url": "ProbRules.html#ProbRules-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mutually exclusive "
},
{
  "id": "ProbRules-19",
  "level": "2",
  "url": "ProbRules.html#ProbRules-19",
  "type": "Checkpoint",
  "number": "4.2.7",
  "title": "Queen or King.",
  "body": "Queen or King If one card is randomly drawn from a deck, what is the probability of drawing a Queen or King?  P(Queen or King) = 4\/52 +4\/52 = 8\/52 = .01538  "
},
{
  "id": "ProbRules-20",
  "level": "2",
  "url": "ProbRules.html#ProbRules-20",
  "type": "Checkpoint",
  "number": "4.2.8",
  "title": "Face Card.",
  "body": "Face Card If one card is randomly drawn from a deck, what is the probability of drawing a face card (Jack or Queen or King)?  P(Jack or Queen or King) = 4\/52 +4\/52 +4\/52 = 12\/52 = 0.2308  "
},
{
  "id": "ProbRules-26",
  "level": "2",
  "url": "ProbRules.html#ProbRules-26",
  "type": "Checkpoint",
  "number": "4.2.9",
  "title": "Five or Diamond.",
  "body": "Five or Diamond If one card is randomly drawn from a deck, what is the probability of drawing a 5 or a diamond?  P(5 or diamond) = 4\/52 +13\/52 – 1\/52 = 16\/52 = 0.3077  "
},
{
  "id": "ProbRules-27",
  "level": "2",
  "url": "ProbRules.html#ProbRules-27",
  "type": "Checkpoint",
  "number": "4.2.10",
  "title": "Five or Six or Diamond.",
  "body": "Five or Six or Diamond If one card is randomly drawn from a deck, what is the probability of drawing a 5 or 6 or diamond?  P(5 or 6 or diamond) = 4\/52 +4\/52 + 13\/52 – 2\/52 = 23\/52 = 0.4423 since the 5 of diamonds and 6 of diamonds are repeated the groups  "
},
{
  "id": "CondProb",
  "level": "1",
  "url": "CondProb.html",
  "type": "Section",
  "number": "4.3",
  "title": "Conditional Probability",
  "body": " Conditional Probability    At the end of this section you will able to:    Determine if events are independent or dependent.    Determine the probability using \"given\" statements    Distinguish between permutations and combinations      There are times when the sample space or event space are very large, that it is not feasible to write it out. In that case, it helps to have mathematical tools for counting the size of the sample space and event space. These tools are known as counting techniques.   Counting Principle: If Task 1 can be performed in m ways, and Task 2 can be performed in n ways no matter how task 1 turns out, then the sequence task 1 and task 2 can be performed in m·n ways together (as a product).  Suppose a menu offers a choice from 2 salads, 6 main dishes, and 3 desserts options. How many different meals consisting of one salad, one main dish, and one dessert are possible?   Solution: There are three tasks to this meal, picking a salad, a main dish, and a dessert. The salad has 2 choices, the main dish has 6 choices, and the dessert has 3 options. Therefore there are different meals.  If we did this with a tree diagram, we would have 2 lines to represent the two salads, then each salad would have the 6 main dishes branched from it, then each of those branches would have the 3 desserts. If you list each unique outcome, there are 36 different meals.  Password How many three letter passwords can be made from the letters a, b, and c , if the letters can be reused?  3x3x3 = 27 passwords   Kentucky Derby Eight horses that were in the 2024 Kentucky Derby were named: Dornoch, Sierra Leone, Mystik Dan, Catching Freedom, Forever Young, Just Steel, Honor Marie, and Stronghold. In how many ways can the first three finishers turn out from this list of eight horses?  We just need to fill three positions, thus ways for the first three positions.  Fun fact: The winner was Mystik Dan, then Sierra Leone, Forever Young, and Catching Freedom.   How many three letter passwords can be made from the letters a, b, and c if no letters can be repeated?   Solution: There are three tasks that must be done in this case. The tasks are to pick the first letter, then the second letter, and then the third letter. There are 3 options for the first letter, once it is chosen there are two remaining options for the second letter. Once one is chosen there is just one letter option for the last position. Therefore there are 3×2×1=6 unique passwords where the letters do not repeat.  We can also look at this in a tree diagram:  Many counting problems involve multiplying a list of decreasing numbers, such as the non-repeating letters in the password. The product of 3×2×1=3! is called a factorial . There is a special symbol ! for this and a special button on your calculator.   Factorial     As an example  There are a few special values: 0 factorial is defined to be 0! = 1 and 1 factorial is 1! = 1.  To find the factorial button on the TI83Plus, press the [MATH] button and click on the arrow to the right three times until it highlights PRB across the top, and then select option 4: ! and hit [enter].  To calculate 5! input the value 5 first, then [math] PRB select option 4: ! [enter] [enter] = 120   Factorial button on the calculator   Math to PRB to option 4.    Sometimes we are trying to select r objects from n total objects. The number of ways to do this depends on whether the order you choose the r objects matters or not. As an example, if you are trying to call a person on the phone, you have to have their number in the right order. Otherwise, you call someone you did not mean to call. In this case, the order of the numbers matters.  However, you were picking random numbers for the lottery, it does not matter which number you pick first or last. As long as you have the same correct numbers that the lottery people pick, you win. In this case the order does not matter.  A permutation is an arrangement of items with a specific order. You use permutations to count items when the order matters, such as passwords or phone numbers. When the order does not matter you use a combination since the order arrangement of items is not important. When you do a counting problem, the first thing you should ask yourself is “does order matter?”   Permutation Formula  Picking object from total object when order matters:    Example: Eight horses that were in the 2024 Kentucky Derby were named: Dornoch, Sierra Leone, Mystik Dan, Catching Freedom, Forever Young, Just Steel, Honor Marie, and Stronghold. In how many ways can the first three finishers turn out from this list of eight horses?  Since the order matters we will use a permutation where total horses and positions.  Thus ways to finish the race.  To enter this in the calculator:  input the value 8 [math] PRB select option 4: ! [enter], hit the divide button, paratheses ( 8-3 ) [math] PRB select option 4: ! [enter] [enter]   Factorial calculation on the calculator   Math to PRB to option 4.    Alternatively, you can use the permutation function in the probability menu. Enter the value 8 first, [MATH] button and three arrows to the right for PRB across the top, then select option 2: nPr, hit [enter] and type the value 3, then [enter] again.   Permutation on the calculator   Math to PRB to option 2.     Combination Formula  Picking object from total object when order does not matters:    Example: In how many different ways could a committee of 5 people be chosen from a class of 30 students? Since the order people are selected does not matter, this will be a combination. The total is and we are selecting . Therefore, nCr = 30C5  Thus combinations for a group of 5 people.  To enter this in the calculator:  input 30 [math] PRB select option 4: ! [enter] divide button, paratheses ( 5 [math] PRB select option 4: ! [enter], the multiply button, then paratheses ( 30-5 ) [math] PRB select option 4: ! [enter], close paratheses ) , and finally [enter] to calculate it.   Combination calculation on the calculator   Math to PRB to option 4.    Alternatively, you can use the combination function in the probability menu. Enter the value 30 first, [MATH] button and three arrows to the right for PRB across the top, then select option 3: nCr, hit [enter] and type the value 5, then [enter] again.   Combination on the calculator   Math to PRB to option 3.     Practice Problems   Biology Club In a biology club with 15 members, how many ways can a slate of 3 officers consisting of a president, vice-president and secretary\/treasurer be chosen?  This is a permutation since the order matters when choosing officers. 15P3 = 2730 ways to shoe officers   Chemistry Club In a chemistry club with 15 members, how many ways can a committee of 3 members be chosen?  This is looking as a group where the order does not matter, thus a combination. 15C3 = 455 combinations for the committee.   license plates A Colorado license plate is created by using 3 letters from the alphabet followed by a 3-digit number. How many license plates are possible if the number and letters can be repeated?  Use the counting principles since the letters can be repeated. There are 26 letters in the alphabet and 10 possible digits (0 through 9). 26x26x26x10x10x10 = 17,576,000 possible plates.   "
},
{
  "id": "CondProb-2",
  "level": "2",
  "url": "CondProb.html#CondProb-2",
  "type": "Objectives",
  "number": "4.3",
  "title": "",
  "body": "  At the end of this section you will able to:    Determine if events are independent or dependent.    Determine the probability using \"given\" statements    Distinguish between permutations and combinations     "
},
{
  "id": "CondProb-4",
  "level": "2",
  "url": "CondProb.html#CondProb-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Counting Principle: "
},
{
  "id": "CondProb-8",
  "level": "2",
  "url": "CondProb.html#CondProb-8",
  "type": "Checkpoint",
  "number": "4.3.1",
  "title": "Password.",
  "body": "Password How many three letter passwords can be made from the letters a, b, and c , if the letters can be reused?  3x3x3 = 27 passwords  "
},
{
  "id": "CondProb-9",
  "level": "2",
  "url": "CondProb.html#CondProb-9",
  "type": "Checkpoint",
  "number": "4.3.2",
  "title": "Kentucky Derby.",
  "body": "Kentucky Derby Eight horses that were in the 2024 Kentucky Derby were named: Dornoch, Sierra Leone, Mystik Dan, Catching Freedom, Forever Young, Just Steel, Honor Marie, and Stronghold. In how many ways can the first three finishers turn out from this list of eight horses?  We just need to fill three positions, thus ways for the first three positions.  Fun fact: The winner was Mystik Dan, then Sierra Leone, Forever Young, and Catching Freedom.  "
},
{
  "id": "CondProb-13",
  "level": "2",
  "url": "CondProb.html#CondProb-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "factorial "
},
{
  "id": "CondProb-14",
  "level": "2",
  "url": "CondProb.html#CondProb-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Factorial "
},
{
  "id": "FactorialButton",
  "level": "2",
  "url": "CondProb.html#FactorialButton",
  "type": "Figure",
  "number": "4.3.3",
  "title": "",
  "body": " Factorial button on the calculator   Math to PRB to option 4.   "
},
{
  "id": "CondProb-23",
  "level": "2",
  "url": "CondProb.html#CondProb-23",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "permutation combination "
},
{
  "id": "CondProb-24",
  "level": "2",
  "url": "CondProb.html#CondProb-24",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Permutation Formula "
},
{
  "id": "FactorialCalc",
  "level": "2",
  "url": "CondProb.html#FactorialCalc",
  "type": "Figure",
  "number": "4.3.4",
  "title": "",
  "body": " Factorial calculation on the calculator   Math to PRB to option 4.   "
},
{
  "id": "PermuationCalc",
  "level": "2",
  "url": "CondProb.html#PermuationCalc",
  "type": "Figure",
  "number": "4.3.5",
  "title": "",
  "body": " Permutation on the calculator   Math to PRB to option 2.   "
},
{
  "id": "CondProb-34",
  "level": "2",
  "url": "CondProb.html#CondProb-34",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Combination Formula "
},
{
  "id": "FactorialCombo",
  "level": "2",
  "url": "CondProb.html#FactorialCombo",
  "type": "Figure",
  "number": "4.3.6",
  "title": "",
  "body": " Combination calculation on the calculator   Math to PRB to option 4.   "
},
{
  "id": "CombinationCalc",
  "level": "2",
  "url": "CondProb.html#CombinationCalc",
  "type": "Figure",
  "number": "4.3.7",
  "title": "",
  "body": " Combination on the calculator   Math to PRB to option 3.   "
},
{
  "id": "CondProb-43",
  "level": "2",
  "url": "CondProb.html#CondProb-43",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Practice Problems "
},
{
  "id": "CondProb-44",
  "level": "2",
  "url": "CondProb.html#CondProb-44",
  "type": "Checkpoint",
  "number": "4.3.8",
  "title": "Biology Club.",
  "body": "Biology Club In a biology club with 15 members, how many ways can a slate of 3 officers consisting of a president, vice-president and secretary\/treasurer be chosen?  This is a permutation since the order matters when choosing officers. 15P3 = 2730 ways to shoe officers  "
},
{
  "id": "CondProb-45",
  "level": "2",
  "url": "CondProb.html#CondProb-45",
  "type": "Checkpoint",
  "number": "4.3.9",
  "title": "Chemistry Club.",
  "body": "Chemistry Club In a chemistry club with 15 members, how many ways can a committee of 3 members be chosen?  This is looking as a group where the order does not matter, thus a combination. 15C3 = 455 combinations for the committee.  "
},
{
  "id": "CondProb-46",
  "level": "2",
  "url": "CondProb.html#CondProb-46",
  "type": "Checkpoint",
  "number": "4.3.10",
  "title": "license plates.",
  "body": "license plates A Colorado license plate is created by using 3 letters from the alphabet followed by a 3-digit number. How many license plates are possible if the number and letters can be repeated?  Use the counting principles since the letters can be repeated. There are 26 letters in the alphabet and 10 possible digits (0 through 9). 26x26x26x10x10x10 = 17,576,000 possible plates.  "
},
{
  "id": "ProbDist",
  "level": "1",
  "url": "ProbDist.html",
  "type": "Section",
  "number": "4.4",
  "title": "Probability Distribution",
  "body": " Probability Distribution    At the end of this section you will able to:    Create a probability distrubtion.    Calculate the events from a probability distribution.    Calculate the mean and standard deviaton for probabilty distributions      "
},
{
  "id": "ProbDist-2",
  "level": "2",
  "url": "ProbDist.html#ProbDist-2",
  "type": "Objectives",
  "number": "4.4",
  "title": "",
  "body": "  At the end of this section you will able to:    Create a probability distrubtion.    Calculate the events from a probability distribution.    Calculate the mean and standard deviaton for probabilty distributions     "
},
{
  "id": "BinomialProb",
  "level": "1",
  "url": "BinomialProb.html",
  "type": "Section",
  "number": "4.5",
  "title": "Binomial Distribution",
  "body": " Binomial Distribution    At the end of this section you will able to:    Determine the conditions of a binomial event.    Calcuate the probabilty for binomial event    Calculate the mean and standard deviaton for binomial events      "
},
{
  "id": "BinomialProb-2",
  "level": "2",
  "url": "BinomialProb.html#BinomialProb-2",
  "type": "Objectives",
  "number": "4.5",
  "title": "",
  "body": "  At the end of this section you will able to:    Determine the conditions of a binomial event.    Calcuate the probabilty for binomial event    Calculate the mean and standard deviaton for binomial events     "
},
{
  "id": "ChapDistributions",
  "level": "1",
  "url": "ChapDistributions.html",
  "type": "Chapter",
  "number": "5",
  "title": "Distributions",
  "body": " Distributions   Text before the first section.     At the end of this chapter you will be able to:     Construct and interpret a sampling distribution    Construct and interpret a bootstrap distribution    Construct confidence intervals from a bootstrap distribution    Determine if a distribution is approximately normal    Applications involving the normal distribution     "
},
{
  "id": "ChapDistributions-3",
  "level": "2",
  "url": "ChapDistributions.html#ChapDistributions-3",
  "type": "Objectives",
  "number": "5",
  "title": "",
  "body": "  At the end of this chapter you will be able to:     Construct and interpret a sampling distribution    Construct and interpret a bootstrap distribution    Construct confidence intervals from a bootstrap distribution    Determine if a distribution is approximately normal    Applications involving the normal distribution    "
},
{
  "id": "ConfIntervals",
  "level": "1",
  "url": "ConfIntervals.html",
  "type": "Chapter",
  "number": "6",
  "title": "Confidence Intervals",
  "body": " Confidence Intervals   Text before the first section.     At the end of this chapter you will be able to:     Construct and interpret confidence intervals for the mean    Construct and interpret confidence intervals for proportions    Construct and interpret confidence intervals for variance and standard deviation     "
},
{
  "id": "ConfIntervals-3",
  "level": "2",
  "url": "ConfIntervals.html#ConfIntervals-3",
  "type": "Objectives",
  "number": "6",
  "title": "",
  "body": "  At the end of this chapter you will be able to:     Construct and interpret confidence intervals for the mean    Construct and interpret confidence intervals for proportions    Construct and interpret confidence intervals for variance and standard deviation    "
},
{
  "id": "sec-SingleMean.ptx",
  "level": "1",
  "url": "sec-SingleMean.ptx.html",
  "type": "Section",
  "number": "7.1",
  "title": "t-test for the Mean",
  "body": " t-test for the Mean  Text of section.  "
},
{
  "id": "sec-SingleProportion.ptx",
  "level": "1",
  "url": "sec-SingleProportion.ptx.html",
  "type": "Section",
  "number": "7.2",
  "title": "z-test for Proportions",
  "body": " z-test for Proportions  Text of section.  "
},
{
  "id": "sec-SingleVariance.ptx",
  "level": "1",
  "url": "sec-SingleVariance.ptx.html",
  "type": "Section",
  "number": "7.3",
  "title": "Chi-Square test for Variance",
  "body": " Chi-Square test for Variance  Text of section.  "
},
{
  "id": "sec-UrbanHeatStudy.ptx",
  "level": "1",
  "url": "sec-UrbanHeatStudy.ptx.html",
  "type": "Section",
  "number": "7.4",
  "title": "Urban Heat Study",
  "body": " Urban Heat Study  Text of section.  Urban-Suburban Temperature Investigation  The phenomenon known as the urban heat island (UHI) effect suggests that urban areas retain more heat than their surrounding suburban or rural areas. A climatologist wondered if the UHI effect is a statistically measurable phenomenon or simply an urban myth. The following tasks analyze climatological data from the summer 2024.  Available Data   NOAA Regional Climate Centers ( https:\/\/scacis.rcc-acis.org\/ ) provides climatological data from stations across the United States. The following information is available from many of the stations:  Temperature    Date: The specific day of the observation.    MaxTemperature: The highest air temperature recorded during a 24-hour period.    MinTemperature: The lowest air temperature recorded during a 24-hour period.    AvgTemperature: The average of the maximum and minimum temperatures for a day.    AvgTemperatureDeparture: The difference between the observed average temperature and a long-term average (typically a 30-year period), indicating how much warmer or cooler the day was compared to the norm.    Degree Day    HDD (Heating Degree Days): A measure of how much (in degrees) and for how long (in days) the outside air temperature was below a certain base temperature (commonly 65°F). It's used to estimate the energy needed for heating.    CDD (Cooling Degree Days): A measure of how much (in degrees) and for how long (in days) the outside air temperature was above a certain base temperature (commonly 65°F). It's used to estimate the energy needed for cooling.    Precipitation and Snow    Precipitation: The total amount of water (in liquid equivalent) that has fallen, including rain, snow, sleet, and hail.    Snowfall: The total amount of snow that has fallen, typically measured in inches.    SnowDepth: The depth of the snow on the ground at a specific time, measured in inches.     Data Organization  The climatologist collected the data at the Denver Water Department near downtown Denver, Colorado. The complete dataset is available ( MetroDenver_Climatological-Data.csv ).   Urban Heat Data   Image of datafile showing 15 cities.     Interpretation Questions From Data Table   Rows Describe what each row represents and describe it in context. Each row is called a case. It is the information from the climate station for the specific day (the first through the fifteenth) in August 2024.  Columns Describe what each column represents. Each column represents a variable. Each column is a measurement of temperature, degree days, and precipitation at the climate station.  Variable For the column labeled “Den_MaxTemperature”, describe the data values in context, the type of data collected, and determine all the possible data values. It is the highest air temperature recorded during a 24-hour period in Denver, CO. The variable is quantitative since numerical data. The continuous temperatures appear to be rounded to the nearest integer between 67 and 100 degrees Fahrenheit.  Commonalities Determine one thing in common for the dates when the high temperature in Denver was 100°F. Minimum temperatures in the 60s, average temperatures in the 80s, highest average temperature departures, zero HDD, highest CDD values, and zero snow-related values.   Differences Determine one thing that was different for the dates when the high temperature in Denver was 100°F. One day had measurable precipitation while the other did not.    Data Display  How would a climatologist characterize the high temperatures of Denver, Colorado, in summer 2024?  The following histogram presents that high temperatures from June 1 to August 31, 2024, at the Denver Water Department near downtown Denver.   Denver High Temperatures   Shows daily high temperature with most values between 85 and 100 with a few lower temps down to 65F.    Shape Describe the shape of the dataset in context.  The high temperatures of Denver in summer 2024 were skewed left.  Center StatKey reports the mean as 90.78. Interpret it in context. Typical high temperature at the Denver station was 90.78°F in summer 2024.  Spread StatKey reports the standard deviation as 6.47. Interpret it in context.  The standard deviation is a measure of spread. According to the 95% rule, we would expect approximately 95% of the temperatures in Denver in summer 2024 to be within 2 standard deviations (2*6.47 = 12.94) of the mean. Because the dataset is skewed left, the 95% rule might not apply as well as it does when the dataset is bell-shaped.     Association Between Variables  The climatologist collected the data at two stations in the Denver Metro Area in Colorado from June 1 to August 31, 2024. The urban station was the Denver Water Department near downtown Denver. The suburban station was located at the Denver Centennial Airport in Centennial, Colorado. The complete dataset is available (MetroDenver_Temperatures.csv).  One preliminary way to determine if UHI effect exists is to decide if there is a visual association between location (urban or suburban) and high temperature.  The graph below shows the boxplot of high temperatures at the two Metro Denver climate stations.   Comparing Heat Boxplot   comparing heat temperatures between Denver and Centennial.    Outliers Identify any outliers in the dataset. State each outlier value and its corresponding station location.  There was one outlier temperature for each climate station represented by the asterisk. Denver had a lower outlier temperature of 67F. Centennial had a lower outlier temperature of 64F.   Medians Estimate the median temperature values of the two datasets and compare them in context.  In summer 2024, the median high temperature for Denver was 91.5 F while the median high temperature for Centennial was 88 F, suggesting that the typical urban high temperature was 6.5 F higher than the typical suburban high temperature at the two locations.   IQR Estimate the interquartile ranges (IQRs) of the two datasets and compare them in context.  In summer 2024, the IQR for Denver was 96-87 = 9 F and for Centennial was 93 – 85 = 8 F, suggesting that the spread of the middle 50% of the values of the temperatures was similar for both locations.   Association Based on the boxplot, is there an association between the high temperatures between Denver and Centennial? Explain your thinking.  An association exists between a categorical variable (location) and a numerical variable (high temperature), if the difference between the measures of center in relation to the measure of spread distinguishes the two datasets.  The difference between the two medians was 6.5 F. The IQRs of the high temperatures of the two locations was about 8.5 F. The proportion of the difference of center to spread was 0.76. There is some visual evidence to suggest that high temperature is associated with location since the box for Denver is shifted farther to the right. Later we will determine this numerically with hypothesis testing.     Study Type  The phenomenon known as the urban heat island (UHI) effect suggests that urban areas retain more heat than their surrounding suburban or rural areas. A climatologist wondered if the UHI effect is a statistically measurable phenomenon or simply an urban myth.   Study 1  A climatologist collected the data at two stations in the Denver Metro Area in Colorado from June 1 to August 31, 2024. The urban station was the Denver Water Department near downtown Denver. The suburban station was located at the Denver Centennial Airport in Centennial, Colorado.  Answer the following questions regarding Study 1.  Sample Identify the sample. Is the sample representative of the population? Briefly explain.  The sample is the temperatures at the two climate stations in the Denver metro area during the summer 2024. The sample is representative of recent summer high temperatures in the Denver metro area.   Variables Identify the variables and classify as explanatory or response. Describe what type of variable each is.  The explanatory variable is the location (urban versus nearby suburban), thus categorical or qualitative. The response variable is high temperature (measured in degrees Fahrenheit), thus numeric or quantitative.   Study Design What research design did the climatologist use to answer the research question? Briefly explain.  The study is a matched pair design. The climatologist obtained the data at two climate stations in the same metro area on the same days in summer 2024.  This is an observational study. The climatologist did not actively induce change in the explanatory variable, but rather the climatologist recorded the high temperatures at the two different climate stations in the Denver metro area on the same days in summer 2024.   Causation If the researcher finds an association between the explanatory and response variables, would it also be appropriate to conclude causation? Explain.  Because the study is an observational study, any association may not be concluded as causation. There may be confounding variables unaccounted for in the study that affect the high temperatures of the urban and suburban stations other than the UHI effect. For example, Denver is near the Rocky Mountain range; geographical phenomena may influence the temperatures at the stations rather than the UHI effect.    Study 2   A climatologist obtained a list of 20 most urban areas\/cities in the United States. Using the map of climate stations from the NOAA Regional Climate Centers (https:\/\/scacis.rcc-acis.org\/), the climatologist selected an urban station near the center of the city. Next, the climatologist zoomed out from the selected urban station to find a nearby suburban station. In most cases, the climatologist selected the nearest station that recorded the same climatological data located just outside the city’s loop or beltway (i.e., the large, controlled-access highway that encircles a city). The following is a table of the metro areas and the climate stations selected by the climatologist.  Table of cities  Sample Identify the sample. Is the sample representative of the population? Briefly explain.  The sample is the temperatures at the two climate stations in 20 most populated metro areas in the US in August 2024. The sample is representative of recent summer high temperatures of urban and suburban locations in metro areas in the US.   Variables Identify the variables and classify as explanatory or response. Describe what type of variable each is.  The explanatory variable is the location (urban versus nearby suburban) which is categorical. The response variable is high temperature (measured in degrees Fahrenheit) which is numerical.   Study Design What research design did the climatologist use to answer the research question? Briefly explain.  The study is a matched pair design. The climatologist obtained data on the same day in August 2024 for climate stations of 20 metro areas. Thus, the data for each day is paired by location. This is an observational study. The climatologist did not actively induce change in the explanatory variable, but rather the climatologist recorded the high temperatures at the two different climate stations in 20 metro areas.   Causation If the researcher finds an association between the explanatory and response variables, would it also be appropriate to conclude causation? Explain.  Because the study is an observational study, any association may not be concluded as causation. However, given the diverse locations of the 20 urban areas, a single confounding variable consistent among the metro areas is less likely than selecting the high temperatures at a single urban area.     Estimating with Bootstrapping  A climatologist collected the data at two stations in the Denver Metro Area in Colorado from June 1 to August 31, 2024. The urban station was the Denver Water Department near downtown Denver. The suburban station was located at the Denver Centennial Airport in Centennial, Colorado.  The climatologist wanted to infer the true difference in high temperatures during the summer between the two stations. So, he calculated the difference in high temperatures between the Denver station and the Centennial station each day. The original sample displays a dotplot of the temperature differences. The bootstrap sample displays one dotplot generated by StatKey.   Bootstrap Samples   original sample and a bootstrap sample.    Bootstrap Sample Explain how StatKey obtained the Bootstrap Sample.  A bootstrap sample is randomly generated from the original sample with replacement with the same sample size as the original. That is, 92 values from the original sample were randomly selected with replacement to form the bootstrap sample. The bootstrap sample statistic is the mean of 4.5 as the average difference in temperature for the sample.   The dotplot below is a bootstrap distribution of the difference in high temperatures from StatKey based on the high temperature data recorded in summer 2024 (the original sample).   Bootstrap Distribution of 1000 samples   Bootstrap Distribution of 1000 samples.    Answer the following using the Bootstrap distribution.  Bootstrap Dotplot Identify on the dotplot the relevant value obtained from the bootstrap sample. Briefly explain what you indicated.  There is a single dot for the value of 4.5 in the dotplot. It is the mean of the given bootstrap sample from above. Recall that each dot represents the mean from a bootstrap sample. The bootstrap distribution shows 1000 samples with each sample of 92 values of the difference in temperature.   Standard Error State the standard error for the bootstrap distribution.  The dotplot states that the standard error is 0.631, which measures the spread in the distribution from the mean.   Margin of Error Determine the margin of error for a 95% confidence interval for the mean difference of high temperatures.  The margin of error using the 95% Rule is 2 times the standard error, thus 2(0.631) = 1.262. The margin of error is how precise the value of 2.783 (the sample mean difference) is as an estimate for the typical mean difference of high temperatures between the Denver and Centennial climate stations.   Interval Use the bootstrap distribution to compute a 95% confidence interval for the actual mean difference of high temperatures between the Denver and Centennial climate stations. Round values to three decimal places.  Using the 95% Rule,  Lower bound:  Upper bound:  The 95% confidence interval is (1.521, 4.045).  We are 95% confident that the true mean difference of high temperatures between the Denver and Centennial climate stations is between 1.521 F and 4.045 F.  We are 95% confident that the actual high temperature at the Denver climate stations is on average between 1.521 F and 4.045 F hotter than at the Centennial climate station during the summer months.     Using Randomization Samples  A climatologist collected the data at three stations in the Denver Metro Area in Colorado from June 1 to August 31, 2024. The following is a summary of the clinical stations:    Denver Water Department near downtown Denver (urban station)    Denver Centennial Airport in Centennial, southeast of downtown Denver (suburban station)    Lakewood, a suburb west of downtown Denver (suburban station)    The climatologist wanted to test whether there were any statistical differences in high temperatures of the three climate stations during summer months. So, he calculated the difference in high temperatures between each pair of stations: Denver–Centennial, Denver–Lakewood, and Centennial–Lakewood.   Study 1   In the first study, the climatologist wanted to decide using statistical analysis if the UHI effect was statistically credible. He examined the differences in high temperatures between two climate stations - one urban and one suburban in the Denver metro area - to test the claim that there is a statistical difference that we would expect if there were a UHI effect.  The original sample displays a dotplot of the differences between the high temperatures of the Denver and Centennial stations. The randomization sample displays one dotplot generated by StatKey.   Randomization Sample   original sample and a randomized sample.    Randomized Sample Explain how StatKey obtained the Randomization Sample.  A randomization sample for paired data is obtained when we assume that there is no difference between the Denver and Centennial high temperatures, thus the population mean of the differences is zero. So, the center of the randomization dotplot should be centered at the null value of 0. The standard error of the randomization dotplot should be equal to the sampling distribution using the original sample and generating random samples of size 92.  StatKey generates the Randomization Sample by randomly selecting 92 values from the original sample with replacement, into two groups and finds the difference between each pair, so that the randomization sample is centered at 0.   Dotplot Identify on the dotplot the relevant value obtained from the randomization sample. Briefly explain what you indicated.  The mean of the randomization sample is 1.5. The red dot displays the mean of the randomization sample on the distribution below. Each dot in the distribution below is the average difference between the two randomized groups   Below is a randomization distribution from StatKey based on the climatologist’s claim for 2000 samples.   Randomization Distribution   Randomized distribution of 2000 samples centered at zero.    Hypotheses Write the null and alternative hypotheses for the climatologist's claim.  Let be the population mean of the difference in the paired high temperatures between the Denver and Centennial stations. Then, the hypotheses are: and    Sample statistic d. What is the observed sample statistic of the original sample? Estimate where to plot this observed statistic on the randomization dotplot.  The mean of the sample data is . However, the value 2.783 is too far to the right of the maximum value on the randomization dotplot to be identified on the graph. Thus it is unlikely to occur by random chance   p-value Estimate and interpret the p-value using the randomization distribution.  None of the 2000 random samples were greater than or equal to the sample statistic 2.783. So, the p-value = 0\/2000 = 0.  When we assume that there is no difference in the high temperatures between the Denver and Centennial stations, the chance of getting the mean difference of 2.783 is near zero, thus highly unlikely to occur if the null hypothesis true. This indicates that the difference is statistically significant.   Conclusion Based on the climatologist's results, what decision and what conclusion would the climatologist make for their investigation assuming α=0.05? Explain your answer.  It is very unlikely that we would get a mean difference of 2.783 by chance if the actual difference was 0. It is much less than the confidence level α=0.05. So, we would reject the assumption that there is no difference between the high temperatures at the Denver and Centennial stations. There is evidence that there is a statistical difference between the high temperatures at the urban and suburban stations, and the average high temperature at the urban station was greater than the average high temperature at the suburban station.    "
},
{
  "id": "sec-UrbanHeatStudy.ptx-3",
  "level": "2",
  "url": "sec-UrbanHeatStudy.ptx.html#sec-UrbanHeatStudy.ptx-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Urban-Suburban Temperature Investigation "
},
{
  "id": "sec-UrbanHeatStudy.ptx-5",
  "level": "2",
  "url": "sec-UrbanHeatStudy.ptx.html#sec-UrbanHeatStudy.ptx-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Available Data "
},
{
  "id": "UrbanHeat",
  "level": "2",
  "url": "sec-UrbanHeatStudy.ptx.html#UrbanHeat",
  "type": "Figure",
  "number": "7.4.1",
  "title": "",
  "body": " Urban Heat Data   Image of datafile showing 15 cities.   "
},
{
  "id": "subsec-UrbanHeatDatatable-4",
  "level": "2",
  "url": "sec-UrbanHeatStudy.ptx.html#subsec-UrbanHeatDatatable-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Interpretation Questions From Data Table "
},
{
  "id": "subsec-UrbanHeatDatatable-5",
  "level": "2",
  "url": "sec-UrbanHeatStudy.ptx.html#subsec-UrbanHeatDatatable-5",
  "type": "Checkpoint",
  "number": "7.4.2",
  "title": "Rows.",
  "body": "Rows Describe what each row represents and describe it in context. Each row is called a case. It is the information from the climate station for the specific day (the first through the fifteenth) in August 2024. "
},
{
  "id": "subsec-UrbanHeatDatatable-6",
  "level": "2",
  "url": "sec-UrbanHeatStudy.ptx.html#subsec-UrbanHeatDatatable-6",
  "type": "Checkpoint",
  "number": "7.4.3",
  "title": "Columns.",
  "body": "Columns Describe what each column represents. Each column represents a variable. Each column is a measurement of temperature, degree days, and precipitation at the climate station. "
},
{
  "id": "subsec-UrbanHeatDatatable-7",
  "level": "2",
  "url": "sec-UrbanHeatStudy.ptx.html#subsec-UrbanHeatDatatable-7",
  "type": "Checkpoint",
  "number": "7.4.4",
  "title": "Variable.",
  "body": "Variable For the column labeled “Den_MaxTemperature”, describe the data values in context, the type of data collected, and determine all the possible data values. It is the highest air temperature recorded during a 24-hour period in Denver, CO. The variable is quantitative since numerical data. The continuous temperatures appear to be rounded to the nearest integer between 67 and 100 degrees Fahrenheit. "
},
{
  "id": "subsec-UrbanHeatDatatable-8",
  "level": "2",
  "url": "sec-UrbanHeatStudy.ptx.html#subsec-UrbanHeatDatatable-8",
  "type": "Checkpoint",
  "number": "7.4.5",
  "title": "Commonalities.",
  "body": "Commonalities Determine one thing in common for the dates when the high temperature in Denver was 100°F. Minimum temperatures in the 60s, average temperatures in the 80s, highest average temperature departures, zero HDD, highest CDD values, and zero snow-related values.  "
},
{
  "id": "subsec-UrbanHeatDatatable-9",
  "level": "2",
  "url": "sec-UrbanHeatStudy.ptx.html#subsec-UrbanHeatDatatable-9",
  "type": "Checkpoint",
  "number": "7.4.6",
  "title": "Differences.",
  "body": "Differences Determine one thing that was different for the dates when the high temperature in Denver was 100°F. One day had measurable precipitation while the other did not. "
},
{
  "id": "UrbanHeatHisto",
  "level": "2",
  "url": "sec-UrbanHeatStudy.ptx.html#UrbanHeatHisto",
  "type": "Figure",
  "number": "7.4.7",
  "title": "",
  "body": " Denver High Temperatures   Shows daily high temperature with most values between 85 and 100 with a few lower temps down to 65F.   "
},
{
  "id": "subsec-UrbanHeatDisplay-5",
  "level": "2",
  "url": "sec-UrbanHeatStudy.ptx.html#subsec-UrbanHeatDisplay-5",
  "type": "Checkpoint",
  "number": "7.4.8",
  "title": "Shape.",
  "body": "Shape Describe the shape of the dataset in context.  The high temperatures of Denver in summer 2024 were skewed left. "
},
{
  "id": "subsec-UrbanHeatDisplay-6",
  "level": "2",
  "url": "sec-UrbanHeatStudy.ptx.html#subsec-UrbanHeatDisplay-6",
  "type": "Checkpoint",
  "number": "7.4.9",
  "title": "Center.",
  "body": "Center StatKey reports the mean as 90.78. Interpret it in context. Typical high temperature at the Denver station was 90.78°F in summer 2024. "
},
{
  "id": "subsec-UrbanHeatDisplay-7",
  "level": "2",
  "url": "sec-UrbanHeatStudy.ptx.html#subsec-UrbanHeatDisplay-7",
  "type": "Checkpoint",
  "number": "7.4.10",
  "title": "Spread.",
  "body": "Spread StatKey reports the standard deviation as 6.47. Interpret it in context.  The standard deviation is a measure of spread. According to the 95% rule, we would expect approximately 95% of the temperatures in Denver in summer 2024 to be within 2 standard deviations (2*6.47 = 12.94) of the mean. Because the dataset is skewed left, the 95% rule might not apply as well as it does when the dataset is bell-shaped.  "
},
{
  "id": "UrbanHeatBox",
  "level": "2",
  "url": "sec-UrbanHeatStudy.ptx.html#UrbanHeatBox",
  "type": "Figure",
  "number": "7.4.11",
  "title": "",
  "body": " Comparing Heat Boxplot   comparing heat temperatures between Denver and Centennial.   "
},
{
  "id": "subsec-UrbanHeatAssociation-6",
  "level": "2",
  "url": "sec-UrbanHeatStudy.ptx.html#subsec-UrbanHeatAssociation-6",
  "type": "Checkpoint",
  "number": "7.4.12",
  "title": "Outliers.",
  "body": "Outliers Identify any outliers in the dataset. State each outlier value and its corresponding station location.  There was one outlier temperature for each climate station represented by the asterisk. Denver had a lower outlier temperature of 67F. Centennial had a lower outlier temperature of 64F.  "
},
{
  "id": "subsec-UrbanHeatAssociation-7",
  "level": "2",
  "url": "sec-UrbanHeatStudy.ptx.html#subsec-UrbanHeatAssociation-7",
  "type": "Checkpoint",
  "number": "7.4.13",
  "title": "Medians.",
  "body": "Medians Estimate the median temperature values of the two datasets and compare them in context.  In summer 2024, the median high temperature for Denver was 91.5 F while the median high temperature for Centennial was 88 F, suggesting that the typical urban high temperature was 6.5 F higher than the typical suburban high temperature at the two locations.  "
},
{
  "id": "subsec-UrbanHeatAssociation-8",
  "level": "2",
  "url": "sec-UrbanHeatStudy.ptx.html#subsec-UrbanHeatAssociation-8",
  "type": "Checkpoint",
  "number": "7.4.14",
  "title": "IQR.",
  "body": "IQR Estimate the interquartile ranges (IQRs) of the two datasets and compare them in context.  In summer 2024, the IQR for Denver was 96-87 = 9 F and for Centennial was 93 – 85 = 8 F, suggesting that the spread of the middle 50% of the values of the temperatures was similar for both locations.  "
},
{
  "id": "subsec-UrbanHeatAssociation-9",
  "level": "2",
  "url": "sec-UrbanHeatStudy.ptx.html#subsec-UrbanHeatAssociation-9",
  "type": "Checkpoint",
  "number": "7.4.15",
  "title": "Association.",
  "body": "Association Based on the boxplot, is there an association between the high temperatures between Denver and Centennial? Explain your thinking.  An association exists between a categorical variable (location) and a numerical variable (high temperature), if the difference between the measures of center in relation to the measure of spread distinguishes the two datasets.  The difference between the two medians was 6.5 F. The IQRs of the high temperatures of the two locations was about 8.5 F. The proportion of the difference of center to spread was 0.76. There is some visual evidence to suggest that high temperature is associated with location since the box for Denver is shifted farther to the right. Later we will determine this numerically with hypothesis testing.  "
},
{
  "id": "subsec-UrbanHeatStudyType-2",
  "level": "2",
  "url": "sec-UrbanHeatStudy.ptx.html#subsec-UrbanHeatStudyType-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "urban heat island (UHI) effect "
},
{
  "id": "subsec-UrbanHeatStudyType-3",
  "level": "2",
  "url": "sec-UrbanHeatStudy.ptx.html#subsec-UrbanHeatStudyType-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Study 1 "
},
{
  "id": "subsec-UrbanHeatStudyType-6",
  "level": "2",
  "url": "sec-UrbanHeatStudy.ptx.html#subsec-UrbanHeatStudyType-6",
  "type": "Checkpoint",
  "number": "7.4.16",
  "title": "Sample.",
  "body": "Sample Identify the sample. Is the sample representative of the population? Briefly explain.  The sample is the temperatures at the two climate stations in the Denver metro area during the summer 2024. The sample is representative of recent summer high temperatures in the Denver metro area.  "
},
{
  "id": "subsec-UrbanHeatStudyType-7",
  "level": "2",
  "url": "sec-UrbanHeatStudy.ptx.html#subsec-UrbanHeatStudyType-7",
  "type": "Checkpoint",
  "number": "7.4.17",
  "title": "Variables.",
  "body": "Variables Identify the variables and classify as explanatory or response. Describe what type of variable each is.  The explanatory variable is the location (urban versus nearby suburban), thus categorical or qualitative. The response variable is high temperature (measured in degrees Fahrenheit), thus numeric or quantitative.  "
},
{
  "id": "subsec-UrbanHeatStudyType-8",
  "level": "2",
  "url": "sec-UrbanHeatStudy.ptx.html#subsec-UrbanHeatStudyType-8",
  "type": "Checkpoint",
  "number": "7.4.18",
  "title": "Study Design.",
  "body": "Study Design What research design did the climatologist use to answer the research question? Briefly explain.  The study is a matched pair design. The climatologist obtained the data at two climate stations in the same metro area on the same days in summer 2024.  This is an observational study. The climatologist did not actively induce change in the explanatory variable, but rather the climatologist recorded the high temperatures at the two different climate stations in the Denver metro area on the same days in summer 2024.  "
},
{
  "id": "subsec-UrbanHeatStudyType-9",
  "level": "2",
  "url": "sec-UrbanHeatStudy.ptx.html#subsec-UrbanHeatStudyType-9",
  "type": "Checkpoint",
  "number": "7.4.19",
  "title": "Causation.",
  "body": "Causation If the researcher finds an association between the explanatory and response variables, would it also be appropriate to conclude causation? Explain.  Because the study is an observational study, any association may not be concluded as causation. There may be confounding variables unaccounted for in the study that affect the high temperatures of the urban and suburban stations other than the UHI effect. For example, Denver is near the Rocky Mountain range; geographical phenomena may influence the temperatures at the stations rather than the UHI effect.  "
},
{
  "id": "subsec-UrbanHeatStudyType-10",
  "level": "2",
  "url": "sec-UrbanHeatStudy.ptx.html#subsec-UrbanHeatStudyType-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Study 2 "
},
{
  "id": "subsec-UrbanHeatStudyType-13",
  "level": "2",
  "url": "sec-UrbanHeatStudy.ptx.html#subsec-UrbanHeatStudyType-13",
  "type": "Checkpoint",
  "number": "7.4.20",
  "title": "Sample.",
  "body": "Sample Identify the sample. Is the sample representative of the population? Briefly explain.  The sample is the temperatures at the two climate stations in 20 most populated metro areas in the US in August 2024. The sample is representative of recent summer high temperatures of urban and suburban locations in metro areas in the US.  "
},
{
  "id": "subsec-UrbanHeatStudyType-14",
  "level": "2",
  "url": "sec-UrbanHeatStudy.ptx.html#subsec-UrbanHeatStudyType-14",
  "type": "Checkpoint",
  "number": "7.4.21",
  "title": "Variables.",
  "body": "Variables Identify the variables and classify as explanatory or response. Describe what type of variable each is.  The explanatory variable is the location (urban versus nearby suburban) which is categorical. The response variable is high temperature (measured in degrees Fahrenheit) which is numerical.  "
},
{
  "id": "subsec-UrbanHeatStudyType-15",
  "level": "2",
  "url": "sec-UrbanHeatStudy.ptx.html#subsec-UrbanHeatStudyType-15",
  "type": "Checkpoint",
  "number": "7.4.22",
  "title": "Study Design.",
  "body": "Study Design What research design did the climatologist use to answer the research question? Briefly explain.  The study is a matched pair design. The climatologist obtained data on the same day in August 2024 for climate stations of 20 metro areas. Thus, the data for each day is paired by location. This is an observational study. The climatologist did not actively induce change in the explanatory variable, but rather the climatologist recorded the high temperatures at the two different climate stations in 20 metro areas.  "
},
{
  "id": "subsec-UrbanHeatStudyType-16",
  "level": "2",
  "url": "sec-UrbanHeatStudy.ptx.html#subsec-UrbanHeatStudyType-16",
  "type": "Checkpoint",
  "number": "7.4.23",
  "title": "Causation.",
  "body": "Causation If the researcher finds an association between the explanatory and response variables, would it also be appropriate to conclude causation? Explain.  Because the study is an observational study, any association may not be concluded as causation. However, given the diverse locations of the 20 urban areas, a single confounding variable consistent among the metro areas is less likely than selecting the high temperatures at a single urban area.  "
},
{
  "id": "UrbanHeatBoot1",
  "level": "2",
  "url": "sec-UrbanHeatStudy.ptx.html#UrbanHeatBoot1",
  "type": "Figure",
  "number": "7.4.24",
  "title": "",
  "body": " Bootstrap Samples   original sample and a bootstrap sample.   "
},
{
  "id": "subsec-UrbanHeatBootstrap-5",
  "level": "2",
  "url": "sec-UrbanHeatStudy.ptx.html#subsec-UrbanHeatBootstrap-5",
  "type": "Checkpoint",
  "number": "7.4.25",
  "title": "Bootstrap Sample.",
  "body": "Bootstrap Sample Explain how StatKey obtained the Bootstrap Sample.  A bootstrap sample is randomly generated from the original sample with replacement with the same sample size as the original. That is, 92 values from the original sample were randomly selected with replacement to form the bootstrap sample. The bootstrap sample statistic is the mean of 4.5 as the average difference in temperature for the sample.  "
},
{
  "id": "UrbanHeatBoot2",
  "level": "2",
  "url": "sec-UrbanHeatStudy.ptx.html#UrbanHeatBoot2",
  "type": "Figure",
  "number": "7.4.26",
  "title": "",
  "body": " Bootstrap Distribution of 1000 samples   Bootstrap Distribution of 1000 samples.   "
},
{
  "id": "subsec-UrbanHeatBootstrap-9",
  "level": "2",
  "url": "sec-UrbanHeatStudy.ptx.html#subsec-UrbanHeatBootstrap-9",
  "type": "Checkpoint",
  "number": "7.4.27",
  "title": "Bootstrap Dotplot.",
  "body": "Bootstrap Dotplot Identify on the dotplot the relevant value obtained from the bootstrap sample. Briefly explain what you indicated.  There is a single dot for the value of 4.5 in the dotplot. It is the mean of the given bootstrap sample from above. Recall that each dot represents the mean from a bootstrap sample. The bootstrap distribution shows 1000 samples with each sample of 92 values of the difference in temperature.  "
},
{
  "id": "subsec-UrbanHeatBootstrap-10",
  "level": "2",
  "url": "sec-UrbanHeatStudy.ptx.html#subsec-UrbanHeatBootstrap-10",
  "type": "Checkpoint",
  "number": "7.4.28",
  "title": "Standard Error.",
  "body": "Standard Error State the standard error for the bootstrap distribution.  The dotplot states that the standard error is 0.631, which measures the spread in the distribution from the mean.  "
},
{
  "id": "subsec-UrbanHeatBootstrap-11",
  "level": "2",
  "url": "sec-UrbanHeatStudy.ptx.html#subsec-UrbanHeatBootstrap-11",
  "type": "Checkpoint",
  "number": "7.4.29",
  "title": "Margin of Error.",
  "body": "Margin of Error Determine the margin of error for a 95% confidence interval for the mean difference of high temperatures.  The margin of error using the 95% Rule is 2 times the standard error, thus 2(0.631) = 1.262. The margin of error is how precise the value of 2.783 (the sample mean difference) is as an estimate for the typical mean difference of high temperatures between the Denver and Centennial climate stations.  "
},
{
  "id": "subsec-UrbanHeatBootstrap-12",
  "level": "2",
  "url": "sec-UrbanHeatStudy.ptx.html#subsec-UrbanHeatBootstrap-12",
  "type": "Checkpoint",
  "number": "7.4.30",
  "title": "Interval.",
  "body": "Interval Use the bootstrap distribution to compute a 95% confidence interval for the actual mean difference of high temperatures between the Denver and Centennial climate stations. Round values to three decimal places.  Using the 95% Rule,  Lower bound:  Upper bound:  The 95% confidence interval is (1.521, 4.045).  We are 95% confident that the true mean difference of high temperatures between the Denver and Centennial climate stations is between 1.521 F and 4.045 F.  We are 95% confident that the actual high temperature at the Denver climate stations is on average between 1.521 F and 4.045 F hotter than at the Centennial climate station during the summer months.  "
},
{
  "id": "subsec-UrbanHeatRandom-5",
  "level": "2",
  "url": "sec-UrbanHeatStudy.ptx.html#subsec-UrbanHeatRandom-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Study 1 "
},
{
  "id": "UrbanHeatRansom1",
  "level": "2",
  "url": "sec-UrbanHeatStudy.ptx.html#UrbanHeatRansom1",
  "type": "Figure",
  "number": "7.4.31",
  "title": "",
  "body": " Randomization Sample   original sample and a randomized sample.   "
},
{
  "id": "subsec-UrbanHeatRandom-9",
  "level": "2",
  "url": "sec-UrbanHeatStudy.ptx.html#subsec-UrbanHeatRandom-9",
  "type": "Checkpoint",
  "number": "7.4.32",
  "title": "Randomized Sample.",
  "body": "Randomized Sample Explain how StatKey obtained the Randomization Sample.  A randomization sample for paired data is obtained when we assume that there is no difference between the Denver and Centennial high temperatures, thus the population mean of the differences is zero. So, the center of the randomization dotplot should be centered at the null value of 0. The standard error of the randomization dotplot should be equal to the sampling distribution using the original sample and generating random samples of size 92.  StatKey generates the Randomization Sample by randomly selecting 92 values from the original sample with replacement, into two groups and finds the difference between each pair, so that the randomization sample is centered at 0.  "
},
{
  "id": "subsec-UrbanHeatRandom-10",
  "level": "2",
  "url": "sec-UrbanHeatStudy.ptx.html#subsec-UrbanHeatRandom-10",
  "type": "Checkpoint",
  "number": "7.4.33",
  "title": "Dotplot.",
  "body": "Dotplot Identify on the dotplot the relevant value obtained from the randomization sample. Briefly explain what you indicated.  The mean of the randomization sample is 1.5. The red dot displays the mean of the randomization sample on the distribution below. Each dot in the distribution below is the average difference between the two randomized groups  "
},
{
  "id": "UrbanHeatRandom2",
  "level": "2",
  "url": "sec-UrbanHeatStudy.ptx.html#UrbanHeatRandom2",
  "type": "Figure",
  "number": "7.4.34",
  "title": "",
  "body": " Randomization Distribution   Randomized distribution of 2000 samples centered at zero.   "
},
{
  "id": "subsec-UrbanHeatRandom-13",
  "level": "2",
  "url": "sec-UrbanHeatStudy.ptx.html#subsec-UrbanHeatRandom-13",
  "type": "Checkpoint",
  "number": "7.4.35",
  "title": "Hypotheses.",
  "body": "Hypotheses Write the null and alternative hypotheses for the climatologist's claim.  Let be the population mean of the difference in the paired high temperatures between the Denver and Centennial stations. Then, the hypotheses are: and   "
},
{
  "id": "subsec-UrbanHeatRandom-14",
  "level": "2",
  "url": "sec-UrbanHeatStudy.ptx.html#subsec-UrbanHeatRandom-14",
  "type": "Checkpoint",
  "number": "7.4.36",
  "title": "Sample statistic.",
  "body": "Sample statistic d. What is the observed sample statistic of the original sample? Estimate where to plot this observed statistic on the randomization dotplot.  The mean of the sample data is . However, the value 2.783 is too far to the right of the maximum value on the randomization dotplot to be identified on the graph. Thus it is unlikely to occur by random chance  "
},
{
  "id": "subsec-UrbanHeatRandom-15",
  "level": "2",
  "url": "sec-UrbanHeatStudy.ptx.html#subsec-UrbanHeatRandom-15",
  "type": "Checkpoint",
  "number": "7.4.37",
  "title": "p-value.",
  "body": "p-value Estimate and interpret the p-value using the randomization distribution.  None of the 2000 random samples were greater than or equal to the sample statistic 2.783. So, the p-value = 0\/2000 = 0.  When we assume that there is no difference in the high temperatures between the Denver and Centennial stations, the chance of getting the mean difference of 2.783 is near zero, thus highly unlikely to occur if the null hypothesis true. This indicates that the difference is statistically significant.  "
},
{
  "id": "subsec-UrbanHeatRandom-16",
  "level": "2",
  "url": "sec-UrbanHeatStudy.ptx.html#subsec-UrbanHeatRandom-16",
  "type": "Checkpoint",
  "number": "7.4.38",
  "title": "Conclusion.",
  "body": "Conclusion Based on the climatologist's results, what decision and what conclusion would the climatologist make for their investigation assuming α=0.05? Explain your answer.  It is very unlikely that we would get a mean difference of 2.783 by chance if the actual difference was 0. It is much less than the confidence level α=0.05. So, we would reject the assumption that there is no difference between the high temperatures at the Denver and Centennial stations. There is evidence that there is a statistical difference between the high temperatures at the urban and suburban stations, and the average high temperature at the urban station was greater than the average high temperature at the suburban station.  "
},
{
  "id": "sec-DownloadR",
  "level": "1",
  "url": "sec-DownloadR.html",
  "type": "Section",
  "number": "8.1",
  "title": "Downloading R and R Studio",
  "body": " Downloading R and R Studio  This section gives you the directions for download R for the first time. R is a free, open-source programming language for statistical computing.   Download R   How to download R visit   Download R Studio   How to download R Studio visit  For UNC students only: if you cannot download R and R Studio, you can still access the programs through UNC’s Apporto link. Log in with your UNC credentials. Details can be found in Canvas.  Note: For my classes we will be using R Studio since it has a friendlier interface. R Studio will split the screen into 4 panels, each panel has a different purpose. The top left is where you will see the files that are currently open in R Studio. The bottom left panel is where you will type in the commands and see the computational outputs. The top right panel summarizes the variables. The bottom right panel is where you can access the folders, and this is where the graphical output will show. The R commands are the same for both programs.   Getting ready to use R     Set up a folder for the Using R Files    Save the data and lesson files in this folder    Launch R or R Studio    Set up the working directory    You are ready to begin.    "
},
{
  "id": "sec-DownloadR-3",
  "level": "2",
  "url": "sec-DownloadR.html#sec-DownloadR-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Download R "
},
{
  "id": "sec-DownloadR-5",
  "level": "2",
  "url": "sec-DownloadR.html#sec-DownloadR-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Download R Studio "
},
{
  "id": "sec-DownloadR-9",
  "level": "2",
  "url": "sec-DownloadR.html#sec-DownloadR-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Getting ready to use R "
},
{
  "id": "sec-GraphR",
  "level": "1",
  "url": "sec-GraphR.html",
  "type": "Section",
  "number": "8.2",
  "title": "Graphing with R",
  "body": " Graphing with R  In this section we will learn how to do serveral common graphs with R Studio. The commands are the same for R. We will be using R Studio since it has a friendlier interface for beginners.    At the end of this section you will able to:     Use R Studio to graph boxplots and histograms.    Use R Studio to construct bar graphs and circle graphs.    Use R Studio to construct scatterplots.     First, add the Lesson 1 Graphing text file to your Using R Files folder and the Cereal.csv dataset.  You may need to link your Using R Files folder with the working directory, to do this go to the bottom right panel and under the Files tab click on the triple dots … on the far right to locate your folder and click Open . You should now see the Lesson 1 file and the Cereal data in the bottom right panel. Click on the Lesson 1 and it opens in the top left panel so you can copy the R code or you can type it in the bottom left panel.  Next, you will need to import the data file by clicking on the file and select Import Dataset , a new window will open to give you a preview of the spreadsheet and then click on the Import button at the bottom right. Once it is loaded into R Studio, in the bottom left panel type attach(Cereal) so you can call up the variable names.  Now we are all set to start graphing the data. For each scenario, we will start with the most basic graph and then add some aesthetics, such as titles and colors.   Boxplots  Let's begin with boxplots, which split the data into four sections so we can see the spread of the values. We will first analyze the number of calories in each serving of cereal. Type the following command in the bottom left corner. This will construct a vertical boxplot. The graphs will show up in the bottom right panel of R Studio.   boxplot(Calories)    Image of Vertical Boxplot   Boxplot with values from 80 to 214.     Interpreting the Boxplot: The boxplot shows the smallest value at 80 and the largest is 214 (which is unclear on the graph), this gives the range of 214 - 80 = 134 for the total spread. The box represents the quartiles values around 115 and 160 (actual are Q1= 113.2 and Q3 = 160). The box represents the middle 50% of the data values. The interquartile range = Q3-Q1 =160-113.2 = 46.8. The thick line in the middle is the median = 118 . To calculate the actual values use the summary command with the variable name.   summary(Calories)    Image of summary output   summary values of min =80, Q1=113.2, Median=118, Q3=160, Max=214.    Now let's add a label along the x-axis and make the boxplot horizontal.   boxplot(Calories,horizontal = TRUE,xlab = \"Calories per Serving\")  With the horizontal boxplot it is easier to see the right skewness of the data and it is easier to read the quartile values.   Image of horizontal boxplot   horizontal boxplot with values from 80 to 214.    Suppose we want to organize the boxplot by the company that produces each brand of cereal. We will identify the numerical variable first, then the Tilda symbol ~ followed by the categorical variable.   boxplot(Calories~Company)    Image of comparing boxplots   Boxplot for each company.     Comparing Boxplots: With the three boxplots we can see that Company G has an outlier at the top, Company G and K have similar median values while company Q has a larger median. Company Q is more symmetric while Company G and K are skewed.  Next we will add some color to the graph for fun and give the graph a main title. But investigate the amount of fat in each serving. The boxplot is right skewed with several outliers on the right.   boxplot(Fat,horizontal = TRUE, col='blue', border='red',main=\"Fat Content\")    Image of Fat Content Boxplot   Boxplot with colors.           Histograms  Now let us explore the amount of sugar per serving by looking at the shape of the distribution with a histogram.   hist(Sugars)    Image of histogram   Histogram of sugar content.    The default for a range of 20 is 4 rectangles with a width of 5 grams for each interval. Most cereals have between 10 and 15 grams of sugar per serving. With just four rectangles, it can be difficult to describe the shape of the distribution.  Suppose we want to adjust the number of bars in the histogram, we do this by identifying the number of breaks we want. Suppose we want 10 bars instead of the default of four.   hist(Sugars,breaks=10)    Image of histogram   Histogram of sugar content with 10 bars.    This histogram has 10 bars showing more variation in the amount of sugar per serving. This distribution is bimodal.  Next, let us investigate the amount of sodium in each serving and add some labels to the axes and give the graph a main title.   hist(Sodium,breaks=7,xlab='Sodium Content (mg)',ylab='Frequency',main='Histogram for Sodium Content')    Image of histogram for sodium   Histogram of sodium content.    This histogram has nine intervals for the sodium content per serving. The histograms shows a peak at 200 to 250 milligrams of sodium and is more symmetric and bell shaped than the other histograms.    Categorical Graphs     Frequency Table   To construct graphs for categorical data we first need to create a table of the frequencies from the raw data. We will use the table command for the variable Company.   table(Company)   Notice that the categories are G, K and Q. Next we will create a vector I'm calling Brand to create the labels for our future graph using the full company names. Then we will create a Totals vector to list the summarized frequencies. It is important to keep them in the same order.   Brand   c('General Mills', 'Kelloggs', 'Quacker')    Totals   c(13,11,6)       Pie Graph   Now we can construct a simple pie graph for the proportion of cereals by each company. We are listing the numerical Totals first, and the labels = Brand names were created.   pie(Totals, labels=Brand)   Next let us add some brighter colors to the graph and give it a main title.   pie(Totals, labels=Brand, col=rainbow(3), main='Pie Chart of Cereal Companies')    Bar Graph   Now we can construct a simple bar graph for the frequency of cereals by each company. We are listing the numerical Totals first, and the names.arg = Brand names were created.   barplot(Totals, names.arg=Brand)   Next let us add some brighter colors to the graph and give the graph a main title and label the x-axis.   barplot(Totals, names.arg=Brand, cex.names=0.8, col=rainbow(3), xlab='Cereal Brands', ylab='Frequency', main='Bar Graph of Cereal Companies')     Scatterplots   Scatterplots   Now let us construct a simple scatterplot to show the relationship between two quantitative variables. We will use the plot command and identify the x-variable first and then the y-variable.   plot(Fat,Carbs)   To add at title to the graph we add the main= to the command with the title in quotes.   plot(Fat,Carbs,main='Scatterplot of Fat Content and Carbohydrates')   To find the linear correlation coefficient we use the cor command and identify the x-variable first, and then the y-variable. The correlation value should match our scatterplot for how tightly the points form a line. If we see a positive trend in the graph, then the correlation coefficient value will also be positive, and if we see a negative trend in the scatter plot we would expect the correlation value to be negative.   cor(Fat,Carbs)     Quantile Plots   We often look at the shape of the histogram to help us determine if a variable is approximately normal. We can also check the quantile plot which graphs the z-value with the data values. If the quantile plot forms a line it lets us know the variable is approximately normal. If the graph is curved it is typically not normally distribution. We will use the qqnorm command for the quantile plot. We can add the qqline command afterwards to draw a line through the data to see if it appears linear.   qqnorm(Calories)    qqline(Calories)   "
},
{
  "id": "sec-GraphR-3",
  "level": "2",
  "url": "sec-GraphR.html#sec-GraphR-3",
  "type": "Objectives",
  "number": "8.2",
  "title": "",
  "body": "  At the end of this section you will able to:     Use R Studio to graph boxplots and histograms.    Use R Studio to construct bar graphs and circle graphs.    Use R Studio to construct scatterplots.    "
},
{
  "id": "sec-GraphR-4",
  "level": "2",
  "url": "sec-GraphR.html#sec-GraphR-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Lesson 1 Graphing Cereal.csv "
},
{
  "id": "sec-GraphR-5",
  "level": "2",
  "url": "sec-GraphR.html#sec-GraphR-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Using R Files "
},
{
  "id": "sec-GraphR-6",
  "level": "2",
  "url": "sec-GraphR.html#sec-GraphR-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "attach(Cereal) "
},
{
  "id": "BoxCalorie",
  "level": "2",
  "url": "sec-GraphR.html#BoxCalorie",
  "type": "Figure",
  "number": "8.2.1",
  "title": "",
  "body": " Image of Vertical Boxplot   Boxplot with values from 80 to 214.   "
},
{
  "id": "SummaryCalorie",
  "level": "2",
  "url": "sec-GraphR.html#SummaryCalorie",
  "type": "Figure",
  "number": "8.2.2",
  "title": "",
  "body": " Image of summary output   summary values of min =80, Q1=113.2, Median=118, Q3=160, Max=214.   "
},
{
  "id": "BoxHorzCalorie",
  "level": "2",
  "url": "sec-GraphR.html#BoxHorzCalorie",
  "type": "Figure",
  "number": "8.2.3",
  "title": "",
  "body": " Image of horizontal boxplot   horizontal boxplot with values from 80 to 214.   "
},
{
  "id": "BoxplotbyCompany",
  "level": "2",
  "url": "sec-GraphR.html#BoxplotbyCompany",
  "type": "Figure",
  "number": "8.2.4",
  "title": "",
  "body": " Image of comparing boxplots   Boxplot for each company.   "
},
{
  "id": "BoxplotColor",
  "level": "2",
  "url": "sec-GraphR.html#BoxplotColor",
  "type": "Figure",
  "number": "8.2.5",
  "title": "",
  "body": " Image of Fat Content Boxplot   Boxplot with colors.   "
},
{
  "id": "HistoSugar",
  "level": "2",
  "url": "sec-GraphR.html#HistoSugar",
  "type": "Figure",
  "number": "8.2.6",
  "title": "",
  "body": " Image of histogram   Histogram of sugar content.   "
},
{
  "id": "HistoSugar2",
  "level": "2",
  "url": "sec-GraphR.html#HistoSugar2",
  "type": "Figure",
  "number": "8.2.7",
  "title": "",
  "body": " Image of histogram   Histogram of sugar content with 10 bars.   "
},
{
  "id": "HistoSodium",
  "level": "2",
  "url": "sec-GraphR.html#HistoSodium",
  "type": "Figure",
  "number": "8.2.8",
  "title": "",
  "body": " Image of histogram for sodium   Histogram of sodium content.   "
},
{
  "id": "subsec-Categorical-3",
  "level": "2",
  "url": "sec-GraphR.html#subsec-Categorical-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Frequency Table "
},
{
  "id": "subsec-Categorical-10",
  "level": "2",
  "url": "sec-GraphR.html#subsec-Categorical-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Pie Graph "
},
{
  "id": "subsec-Categorical-15",
  "level": "2",
  "url": "sec-GraphR.html#subsec-Categorical-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Bar Graph "
},
{
  "id": "subsec-Scatterplots-2",
  "level": "2",
  "url": "sec-GraphR.html#subsec-Scatterplots-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Scatterplots "
},
{
  "id": "sec-GraphR-12",
  "level": "2",
  "url": "sec-GraphR.html#sec-GraphR-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Quantile Plots "
},
{
  "id": "sec-Rstats",
  "level": "1",
  "url": "sec-Rstats.html",
  "type": "Section",
  "number": "8.3",
  "title": "Statistics with R",
  "body": " Statistics with R  In this section we will learn to calculate the summary statistics using R studio. We will find the mean and median to measure the center, the variance and standard deviation to measure the spread of values, and find the five-number summary.    At the end of this section you will be able to     Import data into R Studio for analysis.    Calculate the summary statistics.      Finding Summary Statistics with R Studio   We are going to complete Lesson 2 for finding the summary statistics with R Studio. Add the Lesson 2 Statistic text file to your Using R Files folder. We are going to use the same Cereal data set as for graphing data.  You may need to update your working directory , to do this go to the bottom right panel and under the Files tab click on the triple dots on the far right to relocate your file and click Open . You should now see the Lesson 2 file. Click on this and it opens in the top left panel so you can copy the code or you can type it in the bottom left panel.  Next, we will need to import the data file by clicking on file and selecting Import Dataset then click on the Import button at the bottom right. Once the data is loaded into R Studio make sure to use the attach command with the data set name Cereal so you can call up the variable names.   attach(Cereal)   Recall that the commands in R or R studio are all lower case. I tend to use a capital for the first letter of the variables names to help distinguish them.  We will start by looking at some of the summary statistical values for number of calories per serving for a variety of cereal brands.  The most common measures for the center of the distribution are the mean and median. Use the following commands:   mean(Calories)    median(Calories)   To find the measures of spread we look at variance (var) and standard deviation (sd). Use the following commands:   var(Calories)    sd(Calories)  To find the maximum (largest) and minimum (smallest) values use the following commands:   max(Calories)    min(Calories)    Summary of the output: The number of calories per serving has a mean of 133.83 and median of 118. The variance is x.The standard deviation of 34.81 tells us that most values are within 34.81 calories of the mean. The number of calories is between 80 (minimum) and 214 (maximum) per serving. This gives a range of 214 - 80 = 134 calories.  A handy command is a six number summary which contains the typical five-number summary from boxplots and the mean.   summary(Calories)  Sometimes you want the summary for all the variables for the data set. In this case we use summary with the name for the data file which is Cereal    summary(Cereal)   Now repeat the process with one of the other variables. What do these summary statistics tell you about the cereal data set?  "
},
{
  "id": "sec-Rstats-3",
  "level": "2",
  "url": "sec-Rstats.html#sec-Rstats-3",
  "type": "Objectives",
  "number": "8.3",
  "title": "",
  "body": "  At the end of this section you will be able to     Import data into R Studio for analysis.    Calculate the summary statistics.    "
},
{
  "id": "sec-Rstats-4",
  "level": "2",
  "url": "sec-Rstats.html#sec-Rstats-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Finding Summary Statistics with R Studio "
},
{
  "id": "sec-Rstats-23",
  "level": "2",
  "url": "sec-Rstats.html#sec-Rstats-23",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "summary Cereal "
},
{
  "id": "sec-Rtests",
  "level": "1",
  "url": "sec-Rtests.html",
  "type": "Section",
  "number": "8.4",
  "title": "Testing with R",
  "body": " Testing with R  In this section we will perform hypothesis testing and find confidence intervals for a single sample.    At the end of this section you will be able to     Conduct a single t-test for the mean    Interpret the confidence interval for the mean    Conduct a single proportion test using chi square    Interpret the confidence interval for a proportion      Import Cereal Data instructions   Once the data has been imported into R, use the command attach so you can call the data by the variable name.   attach(Cereal)   A handy command is summary of the data set. This finds the minimum, maximum, the quartiles, and the mean for each variable. If the data is categorical it indicates that ….. Recall that the R commands are all lower cases, and I tend to use a capital for the first letter of my variables for easy recognition.   summary(Cereal)    Single Mean   Single t-test for the mean   Lets begin our investigation with a one-sample t-test for the mean. The R command is t.test . We will need to identify the variable, set the null hypothesis to mu= null value, and identify the alternative hypothesis using greater, less or two.sided in quotes. The default is 95% confidence level for the intervals.  We are going to test if the mean of the variable calories is greater than 100 calories per serving. But first, let us see what the mean of the Calories is per serving.   mean(Calories)  Can we determine if the mean calories is significantly more than 100 calories per serving? The Variable = Calories, the null hypothesis is mu=100, and we are checking if the mean is “greater” than 100 calories. Copy the code into R Studio in the bottom left panel. Make sure to hit [enter] to perform the test. The results will show directly under the command.  t.test(Calories,mu=100,alternative=\"greater\")   Let us determine what the mean fiber is per serving.   mean(Fiber)   Next, test if the mean fiber is less than 2 grams per serving.   t.test(Fiber,mu=2,alternative=\"less\")   What is the mean amount of fat per serving?   mean(Fat)   Test if fat is different than 1 gram per serving with 90% confidence level. Since this is a two tailed test, we will use two.sided as the alternative hypothesis and add the command conf.level = to specify we want 90% precision.   t.test(Fat,mu=1,alternative=\"two.sided\", conf.level = 0.90)     Single Proportion Test  We are going to conduct several proportion tests using the cereal data set. Rather than using the standard z-test for proportions, R Studio does a chi-square test which can be generalized to multiple proportions. The format of prop.test (count x, sample size,p=null value, alternative= ) with a default of 95% confidence for a two-tailed test.  First, find the proportions of each brand of cereal using the table command with the variable name.   table(Company)   The first test is to determine if the proportion of Kellogg cereals is different than 50%. Use the prop.test command with the count of 11 out of the sample of 30 cereals. The null hypothesis is p=.50 and we will use the two-tailed test default.   prop.test(11,30,p=.5)   Next, determine if the proportion of Quaker cereals is less than 50%. Here we need to identify the alternative hypothesis as less with a count of 6 out of 30 cereals.   prop.test(6,30,p=.5, alternative=\"less\")   Now determine if the proportion of General Mills cereal is greater than 1\/3 of the cereals at the 90% confidence level. The alternative hypothesis as greater with a count of 13 out of the 30 cereals. We also need to add the condition conf.level = 0.90 to the command.   prop.test(13,30,p=.333, alternative=\"greater\", conf.level = 0.90)    "
},
{
  "id": "sec-Rtests-3",
  "level": "2",
  "url": "sec-Rtests.html#sec-Rtests-3",
  "type": "Objectives",
  "number": "8.4",
  "title": "",
  "body": "  At the end of this section you will be able to     Conduct a single t-test for the mean    Interpret the confidence interval for the mean    Conduct a single proportion test using chi square    Interpret the confidence interval for a proportion    "
},
{
  "id": "sec-Rtests-4",
  "level": "2",
  "url": "sec-Rtests.html#sec-Rtests-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Import Cereal Data instructions "
},
{
  "id": "subsec-SingleMean-2",
  "level": "2",
  "url": "sec-Rtests.html#subsec-SingleMean-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Single t-test for the mean "
},
{
  "id": "sec-Rcompare",
  "level": "1",
  "url": "sec-Rcompare.html",
  "type": "Section",
  "number": "8.5",
  "title": "Comparison Tests with R",
  "body": " Comparison Tests with R  We are going to investigate using R Studio using the same scenarios as in the textbook reading sections for comparing two group.    At the end of this section you will be able to     Compare two independent means using the t-test    Interpret the confidence interval for the difference in means    Conduct a t-test for paired means    Compare two proportions using chi-square test    Interpret the confidence interval for the difference in proportions    Compare two variances with the F-tst      Comparing Two Independent Means  The standard format for a t.test for the mean is identifying the two variables names separated by commas, the alternative hypothesis as alternative = , and the confidence level using conf.level = with the default being 95%.R Studio finds the difference is u1 - u2 so list them in the order you are calculating them.  For our first example, we are comparing the mean time for completing a maze. Recall the scenario: The time (minutes) it took six white mice to learn to run a simple maze and the times it took six brown mice to learn to run the same maze are given. At alpha = 0.05, does the color of the mice make a difference in their learning rate? The data is in the data file XX  We are going to perform a simple t-test for the difference in mean times. Thus the alternative hypothesis is that the means are not equal. We will using the default settings at 95% level. Import the data set and attach the variable names. We will be using the variables WhiteMice and BrownMice. There are no spaces in the name of variables when using R.   t.test(WhiteMice,BrownMice)   Suppose we claim the average mean time is greater for the white mice using alpha = 0.10 level. We can use White mice is greater than Brown mice or brown mice is less than white mice as shown below, and we need to add conf.level = .90 to both commands.   t.test(WhiteMice,BrownMice,alternative = 'greater',conf.level = .90)    t.test(BrownMice,WhiteMice,alternative = 'less',conf.level = .90)   compare the R outputs    Paired Means  When the data is paired in some way we only look at the difference between those paired values. This is also known as a dependent t-test.  The format I use for the paired t-test is t.test(PostValues, PreValues , paired=TRUE, alternative=, conf.level= ) . The difference is u1 - u2 by default, so list the Post values first so it aligns with the claim better.  A physical education director claims that by taking special vitamins a weight lifter can increase his or her strength. Eight athletes are selected and given a test of strength using the standard bench press. Test the effectiveness of the vitamin regimen at alpha = 0.05. Each value represents the maximum number of pounds the athlete can bench press.  Use the data XX and the variables are WeightAfter and the WeightBefore. Since we are comparing the bench press weights before and after the vitamin regiment, it is a paired or dependent t-test. Enter the following R command to compare the change in weights lifted.   t.test(WeightAfter,WeightBefore, paired=TRUE, alternative='greater', conf.level=.95)     Comparing Two Proportions    Comparing Two Variances  Recall the scenario: The time (minutes) it took six white mice to learn to run a simple maze and the times it took six brown mice to learn to run the same maze are given. At alpha = 0.05, does the color of the mice make a difference in their learning rate? The data is in the data file XX. Only this time we want to compare the variance of time between the white and brown mice. So we are checking if the variance is equal or not equal. We will use the R command var.test and we identify our two variables.   var.test(WhiteMice,BrownMice)   Sometimes when we use a data set, not all values are included. In that case we want to ignore any cells without data. We do this by using na.rm=TRUE. Find the standard deviation for the times for both mice groups.   sd(WhiteMice, na.rm=TRUE)    sd(BrownMice, na.rm=TRUE)    "
},
{
  "id": "sec-Rcompare-3",
  "level": "2",
  "url": "sec-Rcompare.html#sec-Rcompare-3",
  "type": "Objectives",
  "number": "8.5",
  "title": "",
  "body": "  At the end of this section you will be able to     Compare two independent means using the t-test    Interpret the confidence interval for the difference in means    Conduct a t-test for paired means    Compare two proportions using chi-square test    Interpret the confidence interval for the difference in proportions    Compare two variances with the F-tst    "
},
{
  "id": "sec-Rcorr",
  "level": "1",
  "url": "sec-Rcorr.html",
  "type": "Section",
  "number": "8.6",
  "title": "Correlation Tests with R",
  "body": " Correlation Tests with R  In this section we will perform the correlation and linear regression analysis with R Studio. We will graph the scatterplot to determine the nature of the relationship, calculate the correlation coefficient to determine its strength. We will conduct a correlation test to determine if it is statistically significant and if so, find the regression equation.    At the end of this section you will be able to     Graph a scatterplot.    Calculate the correlation coefficient.    Determine if the correlation is significant.    Determine the regression equation.    Interpret the coefficient of determination.      Correlation Between Quantitative Variables   Hurricanes   Climate change is a long-term change in the average weather patterns that have come to define Earth's local, regional, and global climates. Changes observed in Earth’s climate since the early 20th century are primarily driven by human activities, particularly fossil fuel burning, which increases heat-trapping greenhouse gas levels in Earth’s atmosphere, raising Earth’s average surface temperature. One indicator of climate change is the increased frequency of major environmental events, such as hurricanes and tornadoes.  The data in Hurricanes.csv contains the number of hurricanes that made landfall on the eastern coast of the United States from 1914 to 2022. Using R Studio, test to see whether the number of hurricanes is increasing over time is statistically significant.  First, construct a scatterplot to describe the nature of the relationship. Use the plot command and identify the independent x -variable, Years, and the dependent y -variable, Hurricanes. It is also helpful to include a main title.   plot(Year, Hurricanes, main='Hurricanes over the Years')    Interpret: We can see a slight positive relationship. As the years increase, the number of hurricanes is increasing. About every 20 years we see a cyclical increase in the number of hurricanes.  Second, calculate the correlation coefficient to describe the strength of the relationship. We will use the cor command with the x-variable and y-variable.   cor(Year, Hurricanes)    Interpret: r = .361 indicates a weak positive correlation. But we want to see if this is significance at α = 0.05 level. So we need to perform a correlation test . The default is a two tailed test with a null hypothesis of no correlation and the alternative as significant correlation. Since we have a positive correlation let us see if the positive correlation is significant.   cor.test(Year, Hurricanes,alternative ='greater', conf.level = .95)   Since there is a significant positive correlation for the number of hurricanes over the years, next we should find the regression equation so we can make predictions. We will use the command lm for a linear model and we identify the y-variable, Hurricanes, first with the tilda symbol ~ then the x-variable, Year.   lm(Hurricanes~Year)    Interpret: The y-intercept is -56.00801 and the slope is 0.03144 which gives the regression equation where x represents the year and y represents the predicted number of hurricanes for that year.  We can create a Simple Linear Regression Model (naming it SLRmodelHurr for Hurricanes) and then summarize the results for some additional information.   SLRmodelHurr=lm(Hurricanes~Year)    summary(SLRmodelHurr)    Interpret: This shows the size of the residuals from the regression line to the actual data points. We can see the correlation test again with t = 4.005 which is statistically significant. The standard error is 2.579. The coefficient of determination is which indicates that 13% of the variation in the number of hurricanes is accounted for in the model and 87% is due to chance and other variables.    Association Between Categorical Variables   "
},
{
  "id": "sec-Rcorr-3",
  "level": "2",
  "url": "sec-Rcorr.html#sec-Rcorr-3",
  "type": "Objectives",
  "number": "8.6",
  "title": "",
  "body": "  At the end of this section you will be able to     Graph a scatterplot.    Calculate the correlation coefficient.    Determine if the correlation is significant.    Determine the regression equation.    Interpret the coefficient of determination.    "
},
{
  "id": "subsec-CorrTests-2",
  "level": "2",
  "url": "sec-Rcorr.html#subsec-CorrTests-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Hurricanes "
},
{
  "id": "subsec-CorrTests-5",
  "level": "2",
  "url": "sec-Rcorr.html#subsec-CorrTests-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scatterplot "
},
{
  "id": "subsec-CorrTests-8",
  "level": "2",
  "url": "sec-Rcorr.html#subsec-CorrTests-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "correlation coefficient "
},
{
  "id": "subsec-CorrTests-10",
  "level": "2",
  "url": "sec-Rcorr.html#subsec-CorrTests-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "correlation test "
},
{
  "id": "subsec-CorrTests-12",
  "level": "2",
  "url": "sec-Rcorr.html#subsec-CorrTests-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "regression equation "
},
{
  "id": "sec-Rassoc",
  "level": "1",
  "url": "sec-Rassoc.html",
  "type": "Section",
  "number": "8.7",
  "title": "Associations with R",
  "body": " Associations with R  Chi Square tests for Association.  "
},
{
  "id": "sec-Ranova",
  "level": "1",
  "url": "sec-Ranova.html",
  "type": "Section",
  "number": "8.8",
  "title": "ANOVA with R",
  "body": " ANOVA with R  ANOVA with R.  "
},
{
  "id": "sec-UNCdata",
  "level": "1",
  "url": "sec-UNCdata.html",
  "type": "Section",
  "number": "9.1",
  "title": "UNC Data Sets",
  "body": " UNC Data Sets  This section includes the data sets from UNC sports and research conducted by UNC faculty.  Bird Vocalization  Gettysburg Data   Vocal Mimicry of Parrots  A survey of vocal mimicry in companion parrots: Article.   Full data set: Parrots Data.   Survey 1  Survey 2  UNC Men Basketball  UNC Women Basketball  UNC Women Volleyball  Link to StatKey   "
},
{
  "id": "sec-UNCdata-5",
  "level": "2",
  "url": "sec-UNCdata.html#sec-UNCdata-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Vocal Mimicry of Parrots "
},
{
  "id": "sec-ClimateData",
  "level": "1",
  "url": "sec-ClimateData.html",
  "type": "Section",
  "number": "9.2",
  "title": "Climate Data Sets",
  "body": " Climate Data Sets  This section includes data sets to analyze climate change as well as the websites where the data was gathered for more current data.   Earthquakes   California Earthquakes:    Hurricanes       Severe Weather   Billion Dollar Weather Events:    Temperatures   Greeley:    Tornadoes   US Tornado Mapping:   "
},
{
  "id": "sec-ClimateData-3",
  "level": "2",
  "url": "sec-ClimateData.html#sec-ClimateData-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Earthquakes "
},
{
  "id": "sec-ClimateData-5",
  "level": "2",
  "url": "sec-ClimateData.html#sec-ClimateData-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Hurricanes "
},
{
  "id": "sec-ClimateData-7",
  "level": "2",
  "url": "sec-ClimateData.html#sec-ClimateData-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Severe Weather "
},
{
  "id": "sec-ClimateData-9",
  "level": "2",
  "url": "sec-ClimateData.html#sec-ClimateData-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Temperatures "
},
{
  "id": "sec-ClimateData-11",
  "level": "2",
  "url": "sec-ClimateData.html#sec-ClimateData-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Tornadoes "
},
{
  "id": "sec-StudyData",
  "level": "1",
  "url": "sec-StudyData.html",
  "type": "Section",
  "number": "9.3",
  "title": "Studies Data Sets",
  "body": " Studies Data Sets  This section includes the data sets for the studies mentioned.   Florida Lakes Bass   Original data source: Florida Bass.   Mammals  Old Faithful  "
},
{
  "id": "sec-StudyData-3",
  "level": "2",
  "url": "sec-StudyData.html#sec-StudyData-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Florida Lakes Bass "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
