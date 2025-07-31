'use client'
import axios from 'axios'

export default function ItemList({ items, fetchItems }) {
  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:5000/api/items/${id}`)
    fetchItems()
  }

  return (
    <div className="space-y-4">
      {items.length === 0 ? (
        <p className="text-center text-gray-500 italic">No items found. Add something!</p>
      ) : (
        items.map((item) => (
          <div
            key={item._id}
            className="flex justify-between items-start gap-4 p-4 bg-white rounded-xl shadow-md border hover:shadow-lg transition"
          >
            <div>
              <p className="text-lg font-semibold text-gray-800">{item.name}</p>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
            <button
              onClick={() => deleteItem(item._id)}
              className="text-red-600 hover:text-red-700 text-sm font-medium transition"
            >
              🗑️ Delete
            </button>
          </div>
        ))
      )}
    </div>
  )
}
