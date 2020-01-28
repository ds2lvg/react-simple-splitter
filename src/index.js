import React, {useRef} from 'react';
import styles from './splitter.css';
/**
* 화면분할 라이브러리
* @since 20.01.25
* @author 김종민
* @param {string} mode - h: 가로 분할, v: 세로 분할
* @param {number} minSize - 축소 가능한 최소 크기 : 버튼으로 축소 하는 기능때문에 사라짐
* @param {number} oneSize - 초기 크기 지정 : w일때는 좌측, h일때는 상단의 크기를 변경
*/

const Splitter = (props) => {
  const {children, option} = props;
  // let child = React.Children.toArray(props.children);
  const [First, Second] = children;
  const wrapRef = useRef();

  // console.log(children)
  let initWidth;
  let initHeight;
  try {
    if(option.oneSize && option.oneSize != 0) {
      if(option.mode === "h") initWidth = option.oneSize + "px"
      if(option.mode === "v") initHeight = option.oneSize + "px"
    }
    if(children.length > 2) {
      throw new Error('\n[Error] Splitter should have only 2 children components. \n[에러] Splitter 내부에 자식 컴포넌트는 2개만 있어야 합니다.');
    }
    if(!option.mode || (option.mode!=="h" && option.mode!=="v" ))  throw new Error('\nobject option should have "mode" property. "h" is horizontal and "v" is vertical \n option 객체안에 mode가 없습니다 "h"는 가로모드, "v"는 세로모드 입니다.');
  } catch (error) {
    console.error(error)
  }

  const mouseDownfn = (e) => {
    // 드래그시 영역의 텍스트 드래그 방지
    if(e.preventDefault) e.preventDefault();  
    // 마우스 이벤트 동작
    const areaNode = wrapRef.current;
    document.addEventListener("mousemove", fnMouseMove);
    document.addEventListener("mouseup", fnMouseUp);    

    // console.log(wrapRef.current.getBoundingClientRect())

    let that = option;
    // 마우스 움직일때 이벤트
    function fnMouseMove(e) {
      let rect = areaNode.getBoundingClientRect();
      
      if(that.mode === "h") { // 가로 분할    
        //let posX = e.screenX - window.screenX - rect.left;
        let posX = e.clientX - rect.left;
        let lSection = areaNode.children[0].children[0];
        let rSection = areaNode.children[0].children[2];

        if(posX > (areaNode.offsetWidth - that.minSize)) {
          //lSection.style.width = (areaNode.offsetWidth - that.minSize) + "px";
        } else if(posX < that.minSize) {
            lSection.style.width = that.minSize + "px";
        } else {
            lSection.style.width = posX + "px";
        }       
      } else if(that.mode === "v") { // 세로 분할
        // console.log(e.clientY, rect.top)
        let posY = e.clientY - rect.top;
        let tSection = areaNode.children[0].children[0];
        let bSection = areaNode.children[0].children[2];
        
        if(posY > (areaNode.offsetHeight - that.minSize)) {
        } else if(posY < that.minSize){
            tSection.style.height = that.minSize + "px";
        } else {
            tSection.style.height = posY + "px";
        }
      }
      // 드래그시 영역의 텍스트 드래그 방지
      if(e.preventDefault) e.preventDefault();        
    }
    // 마우스 손뗄때 이벤트
    function fnMouseUp(e) {
        document.removeEventListener("mousemove", fnMouseMove);
        document.removeEventListener("mouseup", fnMouseUp);
    }
  };

  if(option.mode === 'v'){
    return (
      <div className={styles.sp_table} ref={wrapRef}>
        <div className={styles.sp_v_row}>
          <div className={styles.sp_v_cell} style={{height:initHeight}}>{First}</div>
        </div>
        <div className={styles.sp_v_bar} onMouseDown={mouseDownfn}>
          <div className={styles.sp_v_bar_cell}></div>
        </div>
        <div className={styles.sp_v_row}>
          <div className={styles.sp_v_cell}>{Second}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.sp_table} ref={wrapRef}>
        <div className={styles.sp_h_row}>
          <div className={styles.sp_h_cell} style={{width:initWidth}}>{First}</div>
          <div className={styles.sp_h_bar} onMouseDown={mouseDownfn}></div>
          <div className={styles.sp_h_cell}>{Second}</div>
        </div>
      </div>
    );
  }
};

export default Splitter;