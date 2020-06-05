from app import app
from flask import render_template,flash,redirect, url_for, request
from werkzeug.urls import url_parse
from app.forms import TestCentersForm, StatewiseForm
import webbrowser
import urllib.request
#import lxml
import html2text
import requests, json
import re
from bs4 import BeautifulSoup # BeautifulSoup is in bs4 package 

@app.route('/')
@app.route('/base')
def base():
	# URL3='https://economictimes.indiatimes.com/coronavirus'
	# content=requests.get(URL3)
	# soup = BeautifulSoup(content.text, 'html.parser')
	# contentTable=soup.find_all(lambda tag: tag.name == 'div' and tag.get('class') == ['c_bc-data']) # Use dictionary to pass key : value pair
	# para2=[]
	# for row in contentTable:
	# 	para2.append(row.get_text().replace(',',''))
	# 	news_list2=[]
	url = "https://covid-19-data.p.rapidapi.com/totals"

	querystring = {"format":"undefined"}

	headers = {
		'x-rapidapi-host': "covid-19-data.p.rapidapi.com",
		'x-rapidapi-key': "50b872c26cmsh1057abca8f46ff0p1c3c7ajsnd2fe851266d8"
		}

	response = requests.request("GET", url, headers=headers, params=querystring)

	a=json.loads(response.text)[0]
	return render_template('index2.html',list=a)

@app.route('/testcenters',methods=['GET','POST'])
def testcenters():
	#print(place)
	form = TestCentersForm()
    
	if form.validate_on_submit():
		state_ut=form.state_ut.data.upper()
		try:
			from googlesearch import search
		except ImportError:
			print('No module found')
			
		query='corona centers in india business today'
		for j in search(query,tld='co.in',num=5,stop=1, pause=2):
			print(j)

		response=urllib.request.urlopen(j)
		headers=response.info()
		data=response.read()

		text=html2text.html2text(data.decode('utf-8'))
		text_new1=text.replace('\n\n','#').replace('*','').replace('# #','#').replace('##','#')

		state_ut=state_ut.upper()
		l=re.findall( r'{}[#\s]+[\',\w\s\.&()\-]+'.format(state_ut),text_new1)
		#print(l)
		if len(l)!=0:
			data=l[0].split('#')
			state=data[0]
			centers=data[1].split('\n')
		else:
			state='Not Found'
			centers=[]
		# if place:
		# 	place=place.replace(' ','%20').replace(',','%2C').replace('&','%26')
		return render_template('test_centers2.html',state=state, centers=centers, form=form)

	return render_template('test_centers2.html', title='COVID19 Test Centers in India', form=form)

@app.route('/statewise',methods=['GET','POST'])
def statewise():
	#print(place)
	form = StatewiseForm()
	detail={}
	if form.validate_on_submit():
		state_ut=form.state_ut.data
		response = requests.get("https://api.covid19india.org/data.json")
		# Get the response data as a python object. Verify that it's a dictionary.
		data = response.json()
		state=""
		
		for x in data['statewise']:
		  #print(x['state'].lower())
			if state_ut.lower()== x['state'].lower():
				state=x['state']
				active=x['active']
				deaths=x['deaths']
				recovered=x['recovered']

		if len(state)==0:
			state='Not Found (Check spelling)'
		return render_template('statewise.html', state=state, a=active, d=deaths, r=recovered, form=form)

	return render_template('statewise.html', title='State-wise stats', form=form)


@app.route('/map<place>')
def map(place):
	name=place
	place_url=place.replace(' ','%20').replace(',','%2C').replace('&','%26')
	#print(place)
	return render_template('map.html',place_url=place_url,name=name)

@app.route('/news')
def news():
	URL3='https://economictimes.indiatimes.com/coronavirus'
	content=requests.get(URL3)
	soup = BeautifulSoup(content.text, 'html.parser')
	contentTable=soup.find_all(lambda tag: tag.name == 'div' and tag.get('class') == ['updateText']) # Use dictionary to pass key : value pair
	para2=[]
	for row in contentTable:
		para2.append(row.get_text())
		news_list2=[]
	for i in para2:
		res=i.split('|')
		res[1]=res[1].strip()[:8]
		news_list2.append(res)
	return render_template('news2.html',news_list=news_list2)


@app.route('/about')
def about():
	return render_template('about.html')

@app.route('/contact')
def contact():
	return render_template('contact.html')

@app.route('/industry_trend_pred')
def industry_trend_pred():
	return render_template('Industrial_trend_pred.html')

@app.route('/statemap')
def statemap():
	return render_template('state_map.html')	