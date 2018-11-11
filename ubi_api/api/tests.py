from django.test import TestCase
import requests, json

# Create your tests here.
base = 'http://localhost:8000/api/'
header = {'Content-Type': 'application/json'}

class myTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        # print("setUpTestData: Run once to set up non-modified data for all class methods.")
        pass

    def setUp(self):
        # print("setUp: Run once for every test method to setup clean data.")
        pass

    '''
    Test case signup
    '''
    def test_signup(self):
        payload = {'username': 'aa', 'password': 'aa', 'email': 'gg'+'@gmail.com'}
        r = requests.post(base + 'register', data=json.dumps(payload), headers=header)
        self.assertEqual(r.status_code,201)

    '''
    Test case login
    '''
    def test_login(self):
        payload = {'email': 'rzhang74@illinois.edu', 'password': 'aa'}
        r = requests.post(base + 'login', data=json.dumps(payload), headers=header)
        self.assertEqual(r.status_code,202)
        payload = {'email': 'rzhang74@illinois.edu', 'password': 'a'}
        r = requests.post(base + 'login', data=json.dumps(payload), headers=header)
        self.assertEqual(r.status_code,403)

    '''
    Test case logout
    '''
    def test_logout(self):
        payload = {'email': 'rzhang74@illinois.edu', 'password': 'aa'}
        r = requests.post(base + 'login', data=json.dumps(payload), headers=header)
        self.assertEqual(r.status_code,202)
        token = r.json()['token']
        header['Authorization'] = 'Token ' + token
        r = requests.post(base + 'logout', headers = header)
        self.assertEqual(r.status_code,200)
