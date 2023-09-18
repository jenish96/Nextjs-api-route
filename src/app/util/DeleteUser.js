"use client"

const DeleteUser = ({ id }) => {

    const handleDelete = async () => {
        let res = await fetch(`http://127.0.0.1:3000/api/users/${id}`, {
            method: "DELETE"
        })
        res = await res.json()
        res.success ? alert(res.result) : alert(res.alert)
    }

    return (
        <button onClick={handleDelete} className="btn">Delete</button>
    )
}

export default DeleteUser