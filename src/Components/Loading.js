import React from 'react'

const Loading = (Component) => {
    return ({isLoading, data}) => {
        if (isLoading) {
            return(
                <p>Loading.....</p>
            )
        } else {
            return(
                <Component data={data} />
            )
        }
    }
}

export default Loading