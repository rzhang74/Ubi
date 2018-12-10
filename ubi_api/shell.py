import requests, json
from api.models import *

base = 'http://localhost:8000/api/'
header = {'Content-Type': 'application/json'}
# payload = {'email': 'rzhang74@illinois.edu', 'password': 'aa'}
# r = requests.post(base + 'login', data=json.dumps(payload), headers=header)
# token = r.json()['token']
# header['Authorization'] = 'Token ' + token

# payload = {'uid' : 3}
# r = requests.post(base + 'follow_by_id',data=json.dumps(payload), headers=header)

payload = {'email': 'ruilinzhang1995@gmail.com', 'password': 'aa'}
r = requests.post(base + 'login', data=json.dumps(payload), headers=header)
token = r.json()['token']
header['Authorization'] = 'Token ' + token
payload = {'uid' : 2}
r = requests.post(base + 'follow_by_id',data=json.dumps(payload), headers=header)

# token = r.json()['token']
# header['Authorization'] = 'Token ' + token
# payload = {'name': 'The sexiest KPOP Female Idols Fancams [PART 1]', 'description':'Please like, share, comment & subscribe on my channel for more KPOP videos from The Netherlands!;)', 'address':'/videos/dancing/20.mp4', 'thumbnail_address':'/videos/dancing/20.jpg', 'category':'dancing'}
# requests.post(base + 'upload_video', data=json.dumps(payload), headers = header)

# vs = Video.objects.filter(vid=17)
# v = vs[0]
# v.thumbnail_address = '/videos/movies/17.jpg'
# v.save()