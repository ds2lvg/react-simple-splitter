import React from 'react'

import Splitter from 'react-simple-splitter'

const Second = (props) => {
  return (
    <section className={props.addClass}>
      Author: jongmin kim
    </section>
  )
}

const App = () => {
  const option1 = {
    mode: 'h',
    minSize: 50,
    oneSize: 100,
  }
  const option2 = {
    mode: 'v',
    minSize: 50,
    oneSize: 100,
  }
  return (
    <>
      <section className="fll_sec">
        <Splitter option={option1}>
          <section className="bg1">
           1111
          </section>
          <Second addClass="bg2"/>
        </Splitter>
      </section>
      <section className="fll_sec">
        <Splitter option={option2}>
          <section className="bg3">
            111
          </section>
          <Second addClass="bg4"/>
        </Splitter>
      </section>
      <section className="fll_sec">
        <Splitter option={option1}>
          <section className="bg1">
            <Splitter option={option2}>
              <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Non id, sint quidem rem ratione quaerat in sequi asperiores iure voluptate. Laborum quos quo deserunt ex sequi non consequatur eaque tempore.</div>
              <div className="bg5">Hello React</div>
            </Splitter>
          </section>
          <Second addClass="bg2"/>
        </Splitter>
      </section>
    </>
  );
};

export default App;