const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                  <img src="/images/laughing.jpg" alt="Horse laughing" />
                  <div>
                    Photo By: <a href="https://unsplash.com/@dan_scape">Dan Cook</a> on <a href="https://unsplash.com/photos/MCauAnBJeig">Unsplash</a>
                  </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404


  