# react_CRUD_App
![crud](https://github.com/Jiiker/react_CRUD_App/assets/100774811/85a02b19-5177-42f8-a598-831e7b6adc8e)

## [전체 구조]
- App 컴포넌트 안에 생성, 수정, 삭제 시 알람 기능을 위한 Alert 컴포넌트와 CRUD 기능을 구현할 Main 컴포넌트를 만들어 줬음.
- Main 컴포넌트 안에 List 컴포넌트를 넣고, List 컴포넌트에서 각 항목들을 나열해서 렌더링하는 구조.

## [리스트 생성]
![submit](https://github.com/Jiiker/react_CRUD_App/assets/100774811/3dbc3d2e-5782-4ea5-b020-329fad62265b)
### [Problem]
- 두 개의 변수를 한번의 submit 이벤트로 각각 받아야 하는 문제
### [Try]
- useState를 이용해서 두 개의 변수를 만들어준 뒤에 지출항목과 비용에서 각각 onChange일 때의 value를 받아오도록 함.


## [수정 버튼]
![modify](https://github.com/Jiiker/react_CRUD_App/assets/100774811/2819f12d-e35d-4aa3-b67d-1c79c86e663b)

### [Problem]
- 수정 버튼을 누르면 원래의 제출 버튼이 수정 버튼으로 바뀌어야 함.
- 지출 항목과 비용에다 입력한 값이 수정 버튼을 통해 제출되면, 원래 있던 리스트의 값이 수정 되어야 함.
### [Try]
- 수정중인지 아닌지를 나타내는 boolean 변수 'modifying'을 useState를 이용해서 만들어 주고, 원래의 제출 버튼이 modifying 값에 따라 다르게 작동하도록 구현.

## [총지출 계산]
### [problem]
- 항목을 입력하면 총지출에 바로 반영이 되지 않고, 다음 항목을 입력할 때 이전 항목의 값이 총지출에 반영 됨.
- useState와 props를 너무 무분별하게 사용한 탓에 금액 합계를 나타내는 변수가 수정될 때 어떤 순서로 렌더링 되는지 파악이 안됨.

### [Try]
- 총지출을 계산하던 컴포넌트를 지우고 합계 변수를 만들어 준 컴포넌트에서 총지출에 관한 html 태그를 작성해 줌.
- 합계 변수가 업데이트 될 때마다 해당 페이지가 다시 렌더링 되기 때문에 제대로 반영 된 것으로 보임.
