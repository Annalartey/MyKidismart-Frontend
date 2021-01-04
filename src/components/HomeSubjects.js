import React from 'react'

function HomeSubjects() {
    return (
        <div className="text-center px-2 lg:px-40">
            <h1 className="text-3xl font-bold text-gray-600">OUR LESSONS</h1>
            <h1 className="text-lg font-semibold text-gray-400 mt-10">We have selected specific topics to help your kid learn with fun. the lessons are from the new ges curiculum and have been approved by well trained teachers across the globe.</h1>
            <table className="shadow-xl w-full mt-10">
                <tr>
                    <th>Subjects</th>
                    <th>Topics</th>
                </tr>
                <tr>
                    <td>Maths</td>
                    <td>Numbers<br/>shapes</td>
                </tr>
                <tr>
                    <td>English</td>
                    <td>Alphabets</td>
                </tr>
                <tr>
                    <td>Art</td>
                    <td>colours</td>
                </tr>
                <tr>
                    <td>Science</td>
                    <td>Animals</td>
                </tr>
            </table>
        </div>
    )
}

export default HomeSubjects
