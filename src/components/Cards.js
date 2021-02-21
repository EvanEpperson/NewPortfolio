import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
      <div className="cards">
        <h1>Check out these Projects </h1>
        <div className="cards__container">
          <div className="cards__wraper">
            <ul className="cards__items">
              <CardItem
                src="https://i.imgur.com/KKqxDJD.png"
                text="React Native Chatting App with Firebase Servers"
                label="Pen Pals"
                path="/services"
              />

              <CardItem
                src="https://i.imgur.com/Tyzs6Ee.png"
                text="Tutoring App built with EJS and Javascript"
                label="Student Tutors"
                path="/products"
              />
            </ul>
            {/* if you dont want it with 2 seperate rows take the second ul off  */}
            <ul className="cards__items">
              <CardItem
                src="https://i.imgur.com/tgD1cwa.png"
                text="A form made with React and Ruby on Rails with PSQl database"
                label="Reddit 2.0"
                path="/sign-up"
              />
              <CardItem
                // src="images/"
                text="project 2 Name inside of Cards.js "
                label="Name of Project"
                path="/services"
              />
              <CardItem
                // src="images/"
                text="project 2 Name inside of Cards.js "
                label="Name of Project"
                path="/services"
              />
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Cards
