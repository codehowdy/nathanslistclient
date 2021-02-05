import React from 'react'
import { } from 'reactstrap'

export default function displayreview(props) {



    return (
        <div>
            {
                props.reviewResponses.map(answer => {
                    return (
                        <div className="reviewbox">
                            <h5 className="user-review">{review.title}</h5>
                            <p className="user-review">{review.entry}</p>
                        </div>
                    )
                }
                )
            }
        </div>
    )
}
