'use client'
import { useState } from 'react'
import axios from 'axios'

export default function ItemForm({ fetchItems }) {
  const [form, setForm] = useState({ name: '', description: '' })

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name.trim()) return
    await axios.post('http://localhost:5000/api/items', form)
    setForm({ name: '', description: '' })
    fetchItems()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter item name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <input
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Enter item description"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="text-right">
        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          ➕ Add Item
        </button>
      </div>
    </form>
  )
}
