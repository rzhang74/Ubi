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

    '''
    Test case getUser
    '''
    def test_get_user(self):
        payload = {'email': 'rzhang74@illinois.edu', 'password': 'aa'}
        r = requests.post(base + 'login', data=json.dumps(payload), headers=header)
        self.assertEqual(r.status_code,202)
        token = r.json()['token']

        header['Authorization'] = 'Token ' + token
        r = requests.get(base + 'get_personal_info', headers = header)
        self.assertEqual(r.json()['username'],'rzhang74@illinois.edu')

        r = requests.get(base+'get_user_by_id?uid=2')
        self.assertEqual(r.json()['username'],'rzhang74@illinois.edu')

        r = requests.get(base+'get_user_by_id?uid=-1')
        self.assertEqual(r.status_code,404)
        
        r = requests.get(base+'get_user_by_email?username=rzhang74@illinois.edu')
        self.assertEqual(r.json()['username'],'rzhang74@illinois.edu')

    '''
    Test follow and unfollow for user
    '''
    def test_follow(self):
        payload = {'email': 'rzhang74@illinois.edu', 'password': 'aa'}
        r = requests.post(base + 'login', data=json.dumps(payload), headers=header)
        token = r.json()['token']

        header['Authorization'] = 'Token ' + token
        payload = {'uid': 1}
        r = requests.post(base + 'follow_by_id', data=json.dumps(payload), headers = header)
        self.assertEqual(r.status_code,404)

        header['Authorization'] = 'Token ' + token
        payload = {'uid': 3}
        r = requests.post(base + 'follow_by_id', data=json.dumps(payload), headers = header)
        self.assertEqual(r.status_code,201)

        r = requests.post(base + 'unfollow_by_id', data=json.dumps(payload), headers = header)
        self.assertEqual(r.status_code,200)

    '''
    Test get and upload video
    '''
    def test_video(self):
        payload = {'email': 'rzhang74@illinois.edu', 'password': 'aa'}
        r = requests.post(base + 'login', data=json.dumps(payload), headers=header)
        token = r.json()['token']

            
        payload = {'name': 'video1', 'description':'1', 'address':'1', 'category':'1'}
        r = requests.post(base + 'upload_video', data=json.dumps(payload), headers = header)
        self.assertEqual(r.status_code,201)

        r = requests.get(base + 'get_video_by_id?vid=5',  headers = header)
        self.assertEqual(r.json()['name'], 'video1')

        payload = {'name': 'video2', 'description':'1', 'address':'1', 'category':'1'}
        r = requests.post(base + 'upload_video', data=json.dumps(payload), headers = header)
        self.assertEqual(r.status_code,201)

        r = requests.get(base + 'get_videos_by_user_email?username=rzhang74@illinois.edu',  headers = header)
        print(r.json())

    '''
    Test like video
    '''
    def test_like_video(self):
        payload = {'email': 'rzhang74@illinois.edu', 'password': 'aa'}
        r = requests.post(base + 'login', data=json.dumps(payload), headers=header)
        token = r.json()['token']

        header['Authorization'] = 'Token ' + token
        payload = {'vid': 5}
        r = requests.post(base + 'like_video', data=json.dumps(payload), headers = header)
        self.assertEqual(r.status_code,200)

        r = requests.delete(base + 'like_video_cancel', data=json.dumps(payload), headers = header)
        self.assertEqual(r.status_code,200)

        r = requests.post(base + 'dislike_video', data=json.dumps(payload), headers = header)
        self.assertEqual(r.status_code,200)

        r = requests.delete(base + 'dislike_video_cancel', data=json.dumps(payload), headers = header)
        self.assertEqual(r.status_code,200)

    '''
    Test add and get comment
    '''
    def test_comment(self):
        payload = {'email': 'rzhang74@illinois.edu', 'password': 'aa'}
        r = requests.post(base + 'login', data=json.dumps(payload), headers=header)
        token = r.json()['token']

        header['Authorization'] = 'Token ' + token
        payload = {'vid':5, 'content':'hhhh', 'parent_cid':-1}
        r = requests.post(base + 'add_comment', data=json.dumps(payload), headers=header)
        self.assertEqual(r.status_code,200)

        r = requests.get(base + 'get_comments?vid=5')
        print(r.json())

    '''
    Test add and get community message
    '''
    def test_community_message(self):
        payload = {'email': 'rzhang74@illinois.edu', 'password': 'aa'}
        r = requests.post(base + 'login', data=json.dumps(payload), headers=header)
        token = r.json()['token']

        header['Authorization'] = 'Token ' + token
        payload = {'message':'lol'}
        r = requests.post(base + 'add_message', data=json.dumps(payload), headers=header)
        self.assertEqual(r.status_code,201)

        r = requests.get(base + 'get_messages_by_user_id?uid=2')
        print(r.json())