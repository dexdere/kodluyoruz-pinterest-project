import React from 'react'

function Post() {
    return (
        <div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-7">
                        <article class="card">
                            <img class="card-img-top mb-2"
                                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e0245bb4e87077312cc3d102e68c1efd&auto=format&fit=crop&w=735&q=80"
                                alt="Card image" />
                            <div class="card-body">
                                <h1 class="card-title display-4">
                                    Sushi Rolls </h1>
                                <ul>
                                    <li>5 cups short-grain sushi rice</li>
                                    <li>6 cups water</li>
                                    <li>1/2 cup rice vinegar</li>
                                    <li>2 tablespoons sugar</li>
                                    <li>A teaspoon of salt</li>
                                </ul>
                                <small class="d-block"><a class="btn btn-sm btn-gray200" href="#"><i
                                    class="fa fa-external-link"></i> Visit Website</a></small>

                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post