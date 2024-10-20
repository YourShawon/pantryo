import Image from 'next/image'
import React from 'react'
import RecipeVideo from './_components/RecipeVideo'

const SingleRecipePage = () => {
  return (
    <div>
      <div>
        {/* container */}
        <div>
          {/* single recipe content */}
          <header>
            <h3>Simple Delicious Beef Tacos</h3>

            <div>
              {/* badges */}
              <span>Beef</span>
              <span>Tacos</span>
              <span>Mexican</span>
            </div>
          </header>

          <div>
            {/* recipe video */}
            <div>
              <video src="" />
            </div>
            {/* It will have customized controls */}
          </div>

          <div>
            {/* user section */}
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                {/* user info */}
                <div>
                  {/* avatar */}
                </div>
                <h4>Claire</h4>
              </div>

              <div className='flex items-center gap-2'>
                <div>
                  {/* icons */}
                </div>
                <button>Follow</button>
              </div>
            </div>
          </div>

          <div>
            {/* recipe details */}
            <div>
              {/* chef's note */}
              {/* make this section reusable. because every section has same title and padding style. */}
              <h3>Chef&apos;s Notes</h3>

              <p>
                This is a simple recipe for beef tacos. It is a quick and easy recipe that is perfect for a quick meal.
              </p>
            </div>

            <div>
              {/* details */}
              <h3>Details</h3>
              <div>
                <ul>
                  <li>
                    <span>
                      {/* icon */}
                    </span>
                    <span>Prep time: 20 min</span>
                  </li>

                  <li>
                    <span>
                      {/* icon */}
                    </span>
                    <span>Cook time: 3 hours</span>
                  </li>

                  <li>
                    <span>
                      {/* icon */}
                    </span>
                    <span>Servings: 4</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              {/* ingredients */}
              <h3>Ingredients</h3>
              <div>
                <ul>
                  <li>
                    
                  </li>
                </ul>
              </div>
            </div>

            <div>
              {/* Directions */}
              <h3>Directions</h3>
              <div>
                <ul>
                  <li>
                    
                  </li>
                </ul>
              </div>
            </div>

            <div>
              {/* More Tacos section */}
              <h3>More Tacos</h3>
              <div>
                {/* recipe cards wrapper */}
                <div>
                  {/* recipe card */}
                  <div>
                    {/* image wrapper */}
                    <Image
                      width={400} 
                      height={400} 
                      src={"/logo.png"}
                      alt='recipe'
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <section>
                {/* Comments section */}
                <h3>Comments</h3>
                <div>
                  {/* comments wrapper */}
                  <div className='flex items-center gap-2'>
                    {/* comment */}
                    <div>
                      {/* avatar */}
                      
                    </div>
                    <div className='flex flex-col gap-2'>
                      <div>
                        {/* user info */}
                        <h4>James</h4>
                        <span>2 days ago</span>
                      </div>
                      <p>
                        This is a simple recipe for beef tacos. It is a quick and easy recipe that is perfect for a quick meal.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* Add video */}
        <div>
          {/* <RecipeVideo /> */}
        </div>
      </div>
    </div>
  )
}

export default SingleRecipePage