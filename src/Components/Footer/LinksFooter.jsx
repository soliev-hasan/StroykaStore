import React from 'react'

export default function LinksFooter(props) {
  return (
    <div>
        <div class="links-footer" >
                <ul>
                    <li>{props.first}</li>
                    <li>{props.second}</li>
                    <li>{props.third}</li>
                    <li>{props.fourth}</li>
                </ul>
            </div>
    </div>
  )
}
