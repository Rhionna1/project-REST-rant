const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                  <img src="/images/tablesetting.jpg" alt="Table Settings" />
                  <div>
                    Photo By: <a href="https://unsplash.com/@sewellkare12">Karen Sewell</a> on <a href="https://unsplash.com/photos/yLfsEMVbOWA">Unsplash</a>
                  </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home

