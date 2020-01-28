# react-simple-splitter
 
> simple and basic splitter for react

[![NPM](https://img.shields.io/npm/v/react-simple-splitter.svg)](https://www.npmjs.com/package/react-simple-splitter) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![img](https://lh5.googleusercontent.com/MV4jr0XzEhDB8unPwzy6dSfrWc_PKi7cHB44LMfK-i-16JHwbJcys_WYEZGXVELnK8FPzTHmVtcKVNjxZAhh=w1920-h888-rw)

- It can adjust size in vertical area and horizontal.
  - 가로 분할 혹은 세로 분할해서 각 영역으로 사이즈로 드래그로 조절할 수 있습니다.
- This library use 'display: table' so IE9 is ok
  - 익스9까지 지원할 수 있도록 display: table을 이용하여서 제작했습니다

## Install

```bash
npm i react-simple-splitter
```

## Usage

```jsx
import React from 'react'

import Splitter from 'react-simple-splitter'

const Example = () => {
  const option = {
    mode: 'h',
    minSize: 50,
    oneSize: 100,
  }
  return (
    <Splitter option={option1}>
      <section className="bg1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Non id, sint quidem rem ratione quaerat in sequi asperiores iure voluptate.
        Laborum quos quo deserunt ex sequi non consequatur eaque tempore
      </section>
      <Second addClass="bg2"/> {/* user's component */}
    </Splitter>
  )
}
```

- SplitterContainer should have only 2 children component
- create object option and Inject in SplitterContainer component.
- option
  - mode: "h" is horizontal. "v" is vertical
  - minSize - it can adjust minimum size
  - oneSize: initial size for first area. It's left area in h mode and It's top area in v mode.

## 사용법
- SplitterContainer 내부에 자식 컴포넌트는 2개만 있어야 합니다.
- option 객체를 생성해서 SplitterContainer component에 대입해서 사용합니다.
- option
  - mode: "h" 는 가로모드. "v" 는 세로모드입니다.
  - minSize - 드래그시 줄어들수 있는 최소사이즈 입니다.
  - oneSize: 첫번째 영역의 초기 크기입니다. h mode 일때는 왼쪽 v mode 일때는 상단 영역이 첫번째 영역입니다.

## License

MIT © [ds2lvg](https://github.com/ds2lvg) 

**제작자**: 김종민