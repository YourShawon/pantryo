import Image from "next/image";

export default function Home() {
  return (
    <div className="border">
      {/* popular recipes section start */}
      <section>
        <div>
          {/* container */}
          <h2>Popular Recipes</h2>
          {/* section title */}
          {/* TODO: make this dynamic section wrapper to use in other section also.  */}
          <div>
            {/* card wrapper */}
            <div className="relative">
              <div>
                {/* This section will have fixed height and width. i will set this with flex basis. take reference from facebook story highlight section. */}
                <Image 
                  width={400}
                  height={400}
                  alt="image"
                  src={"/logo.png"}
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full">
                {/* this section will have a padding in each side. */}
                {/* absolute div to position on top of the card. upper elements like the love, comment, share icon, title. */}
                {/* set a before shadow and make it absolute and make it z index lower. it will on top of the image but lower of the upper elements. */}
                <div>
                  {/* upper absolute section. it will be on top right.  */}
                  <div className="flex flex-col gap-1 items-center">
                    <span>
                      {/* svg icon of love */}
                    </span>
                    <span>89</span>
                  </div>
                  <div className="flex flex-col gap-1 items-center">
                    <span>
                      {/* svg icon of comment */}
                    </span>
                    <span>89</span>
                  </div>
                  <div className="flex flex-col gap-1 items-center">
                    <span>
                      {/* svg icon of share */}
                    </span>
                    <span>89</span>
                  </div>
                  
                </div>
                <div className="w-full left-0 bottom-0">
                  {/* lower title section */}
                  <h3>Easy Meatballs with arugula</h3>
                  <div>
                    {/* tags badge */}
                    <span>
                      Italian
                    </span>
                    <span>
                      Fried
                    </span>
                    <span>
                      Main Course
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* popular recipes section end */}

      {/* popular categories start */}
      <section>
        <div>
          {/* container */}
          <h2>Popular Categories</h2>
          <div>
            {/* categories wrapper */}
            {/* make a grid for all the categories */}
            <div className="flex items-center gap-2">
              {/* Category card */}
              <div>
                {/* image wrapper */}
                <Image 
                  width={400}
                  height={400}
                  alt="category img"
                  src="/logo.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* popular categories end */}

      {/* Under 30 Minutes Section start */}
      <section>
        <div>
          {/* container */}
          <h2>Under 30 Minutes</h2>
          <div>
            {/* recipes wrapper */}
            <div>
              {/* recipe card */}
              <div>
                {/* image wrapper */}
                <Image 
                  width={400}
                  height={400}
                  alt="recipe img"
                  src="/logo.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Under 30 Minutes Section end */}

      {/* Top users section start */}
      <section>
        <div>
          {/* container */}
          <div className="flex items-center gap-3">
            <h2>Top Users</h2>
            <span>View all</span> 
            {/* make this a common shared button. */}
          </div>
          <div>
            {/* users wrapper */}
            <div>
              {/* user card */}
              {/* it will have a border with a border radius and a padding in each side. */}
              <div className="flex items-center justify-between">
                {/* user section */}
                <div className="flex items-center gap-2">
                  {/* user avatar and name */}
                  <div>
                    {/* avatar */}
                  </div>
                  <h4>claire</h4>
                </div>

                <div className="flex items-center gap-2">
                  {/* user likes, impressions */}
                  <div className="flex items-center">
                    {/* impression */}
                    <div>
                      {/* svg icon for impression */}
                      impression
                    </div>
                    <span>1.5M</span>
                  </div>

                  <div className="flex items-center">
                    {/* love */}
                    <div>
                      {/* svg icon for love */}
                      impression
                    </div>
                    <span>1.5M</span>
                  </div>

                  <div>
                    {/* Follow button. make this button reusable. */}
                    <button>Follow</button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                {/* middle section. recipe count and view all button */}
                <div></div>
                <div>
                  {/* View all button. shared button */}
                  View all
                </div>
              </div>

              <div>
                <div>
                  {/* recipes of specific user cards wrapper */}
                  <div className="relative">
                    {/* recipe card */}
                    <div>
                      {/* recipe card img warapper*/}
                      <Image 
                        width={400}
                        height={400}
                        alt="image"
                        src={"/logo.png"}
                      />
                    </div>

                    <div className="absolute top-0 left-0 w-full h-full">
                      {/* shadow. make a shadow in this div. and make it absolute. and make it reusable. */}
                    </div>

                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                      {/* It will only show when the recipe card gets hovered. so make a group hover. */}
                      <div>
                        <div>
                          {/* two icon */}
                        </div>
                        <button>View</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      {/* Top users section end */}
    </div>
  );
}
