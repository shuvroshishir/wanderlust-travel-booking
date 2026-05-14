'use client';

import { FieldError, Input, Label, ListBox, TextField, Select, TextArea, Button } from '@heroui/react';
import { redirect } from 'next/navigation';
import React from 'react';

const AdminPage = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const destinationData = Object.fromEntries(formData.entries());

        const res = await fetch('http://localhost:5000/destinations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(destinationData),
        })
        const result = await res.json();

        console.log(result);
        e.target.reset();
        redirect('/destinations');
    }


    return (
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg my-30">
            <h1 className="text-3xl font-bold mb-8 text-center">Add new destination form here</h1>
            <form
                onSubmit={handleSubmit}
                className="p-10 space-y-8"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Destination Name */}
                    <div className="md:col-span-2">
                        <TextField name="destinationName" isRequired>
                            <Label>Destination Name</Label>
                            <Input placeholder="Bali Paradise" className="rounded-2xl" />
                            <FieldError />
                        </TextField>
                    </div>

                    {/* Country */}
                    <TextField name="country" isRequired>
                        <Label>Country</Label>
                        <Input placeholder="Indonesia" className="rounded-2xl" />
                        <FieldError />
                    </TextField>

                    {/* Category - Updated Select Component */}
                    <div>
                        <Select
                            name="category"
                            isRequired
                            className="w-full"
                            placeholder="Select category"
                        >
                            <Label>Category</Label>
                            <Select.Trigger className="rounded-2xl">
                                <Select.Value />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="Beach" textValue="Beach">
                                        Beach
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Mountain" textValue="Mountain">
                                        Mountain
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="City" textValue="City">
                                        City
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Adventure" textValue="Adventure">
                                        Adventure
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Cultural" textValue="Cultural">
                                        Cultural
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="Luxury" textValue="Luxury">
                                        Luxury
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>
                    </div>

                    {/* Price */}
                    <TextField name="price" type="number" isRequired>
                        <Label>Price (USD)</Label>
                        <Input
                            type="number"
                            placeholder="1299"
                            className="rounded-2xl"
                        />
                        <FieldError />
                    </TextField>

                    {/* Duration */}
                    <TextField name="duration" isRequired>
                        <Label>Duration</Label>
                        <Input
                            placeholder="7 Days / 6 Nights"
                            className="rounded-2xl"
                        />
                        <FieldError />
                    </TextField>

                    {/* Departure Date */}
                    <div className="md:col-span-2">
                        <TextField name="departureDate" type="date" isRequired>
                            <Label>Departure Date</Label>
                            <Input type="date" className="rounded-2xl" />
                            <FieldError />
                        </TextField>
                    </div>

                    {/* Image URL - Removed preview */}
                    <div className="md:col-span-2">
                        <TextField name="imageUrl" isRequired>
                            <Label>Image URL</Label>
                            <Input
                                type="url"
                                placeholder="https://example.com/bali-paradise.jpg"
                                className="rounded-2xl"
                            />
                            <FieldError />
                        </TextField>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                        <TextField name="description" isRequired>
                            <Label>Description</Label>
                            <TextArea
                                placeholder="Describe the travel experience..."
                                className="rounded-3xl"
                            />
                            <FieldError />
                        </TextField>
                    </div>
                </div>

                {/* Buttons */}

                <Button
                    type="submit"
                    variant="outline"
                    className=" w-full bg-cyan-500 text-white"
                >
                    Add Destination
                </Button>
            </form>
        </div>
    );
};

export default AdminPage;