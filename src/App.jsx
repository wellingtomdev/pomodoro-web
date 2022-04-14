import React from 'react'
import './App.css';

import Display from './components/Display'

function Contents(props){

  return (
    <div className='contents'>
      <section>
        <h2>
          An online Pomodoro Timer to boost your productivity
        </h2>

        <section>
          <h3>What is Pomodoro Technique?</h3>
          <p>The Pomodoro Technique is created by Francesco Cirillo for a more productive way to work and study. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student. - <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique">Wikipedia</a></p>
        </section>
        
        <section>
          <h3>Features</h3>
          <p># Responsive design that works with desktop and mobile</p>
          <p># Color transition to switch moods between work time and rest time</p>
          <p># Audio notification at the end of a timer period</p>
          <p># Customizable timer intervals to suit your preference</p>
        </section>
      </section>
    </div>
  )
}

function App() {

  return (
    <>
      <Display/>
      <Contents/>
    </>
  )

}

export default App;



