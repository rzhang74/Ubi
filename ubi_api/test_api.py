import requests, json

base = 'http://localhost:8000/api/'
header = {'Content-Type': 'application/json'}

def test_register(uname, password, email):
    payload = {'username': uname, 'password': password, 'email': email}
    r = requests.post(base + 'register', data=json.dumps(payload), headers=header)
    return r

def test_login(uname, passwd):
    payload = {'email': uname, 'password': passwd}
    r = requests.post(base + 'login', data=json.dumps(payload), headers=header)
    return r

def test_logout(auth):
    header['Authorization'] = 'Token ' + auth
    r = requests.post(base + 'logout', headers = header)
    return r
