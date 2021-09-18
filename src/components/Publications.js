import React from 'react';

function Blogs() {
  return (
    <div id="Publications">
        <br></br>
        <h2 className="ComponentTitle" style={{color: 'rgb(212, 222, 230, 0.9)'}}>Publications</h2>
        <div className="PublicationsCards">
          <div id="Carousel">
            <a className="overlay" href="https://medium.com/nerd-for-tech/use-an-auto-rotating-carousel-to-deliver-your-apps-elevator-pitch-923d94f7130d"></a>
          </div>
          <div id="Recursion">
            <a className="overlay" href="https://juancarlosmezadelatorre.medium.com/warming-up-to-recursive-algorithms-5b27ed241f5"></a>
          </div>
          <div id="Hooks">
            <a className="overlay" href="https://juancarlosmezadelatorre.medium.com/react-from-class-components-to-hooks-4cc787290262"></a>
          </div>
        </div>
    </div>
  );
}

export default Blogs;
