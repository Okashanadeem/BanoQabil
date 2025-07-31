'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ItemForm from './components/ItemForm'
import ItemList from './components/ItemList'

export default function Home() {
  const [items, setItems] = useState([])

  const fetchItems = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/items')
      setItems(res.data)
    } catch (err) {
      console.error('Error fetching items:', err)
    }
  }

  useEffect(() => {
    fetchItems()
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 px-4 py-12">
      <div className="max-w-2xl mx-auto bg-white shadow-2xl rounded-2xl p-8 sm:p-10">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          🛠️ Simple CRUD App
        </h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">➕ Add New Item</h2>
          <ItemForm fetchItems={fetchItems} />
        </section>

        <hr className="my-8 border-gray-200" />

        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">📋 Your Items</h2>
          <ItemList items={items} fetchItems={fetchItems} />
        </section>
      </div>
    </main>
  )
}
