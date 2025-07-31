import express from 'express'
import Item from '../models/Item.js'

const router = express.Router()

// CREATE
router.post('/', async (req, res) => {
  try {
    const item = new Item(req.body)
    const saved = await item.save()
    res.status(201).json(saved)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// READ ALL
router.get('/', async (req, res) => {
  const items = await Item.find()
  res.json(items)
})

// READ ONE
router.get('/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id)
    res.json(item)
  } catch (err) {
    res.status(404).json({ error: 'Item not found' })
  }
})

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const updated = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(updated)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id)
    res.json({ message: 'Item deleted' })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

export default router
