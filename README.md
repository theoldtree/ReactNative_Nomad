# ReactNative_Nomad

### module 설치
```
expo install 이용
```

### ScrollView
```
scrollview의 스타일은 contentContainterStyle 프롭으로 수정함
pagingEnabled 로 View별로 스크롤을 넘길수 있게 함
showHorizontalScrollIndicator={false}로 아래의 스크롤바를 없앨 수 있음
horizontal로 방향수정
```

### Dimension
```
Dimensions.get('window').width : 화면 넓이
Dimensions.get('window').hieght : 화면높이
```

### Location
```
위치 알려주는 library
```

### Activity Indicator
```
Loading 표시
```

### object
```
object.name 으로 지정하거나 object[name]으로 지정
const {name,name.name} = object로 여러 변수를 한번에 설정 할 수 있음 -> 구조분해 할당
```

### TouchableHighlight
```
touch 할때의 배경색을 설정할 수 있음
```

### TouchableWithoutFeedback
```
touch 할때 아무런 효과가 나타나지 않음
```

### Pressable
```
touchable 보다 많은 설정을 할 수 있음
hitSlop prop으로 터치 범위를 설정 할 수 있음
```

### map
```
array.map((parameter)=>(
    ~ ~ ~
))
map 함수 안에 `반드시` '소괄호'
```

### return null
```
화면에서 표시되지 않게 하려면 return null을 한다
```

### AsyncStorage
```
expo 의 로컬 저장소
```

### api fetch
```
response = fetch('url')
object = response.json()
```

### string -> object
```
JSON.parse(string)
```

### 어플 아이콘
```
app.json 수정을 통해 해결함
로딩 화면 : splash.png
어플 출시 아이콘 : icon.png
즐겨찾기 웹 아이콘 : favicon.png
안드로이드용 아이콘 : adaptive-icon
```

### Platform.OS
```
OS마다 호환성이 다르기 때문에
if(Platform.OS === ~)로 각 설정을 다르게 해준다.
```
