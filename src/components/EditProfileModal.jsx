"use client";


import { authClient } from "@/lib/auth-client";
import {
    Button,
    FieldError,
    Input,
    Label,
    Modal,
    Surface,
    TextField,
} from "@heroui/react";
import toast from "react-hot-toast";
import { BiEdit } from "react-icons/bi";

export function EditProfileModal() {

    const handleUpdate = async (e) => {
        e.preventDefault();

        const name = e.target.newName.value;
        const image = e.target.newImageUrl.value;
        console.log({ name, image });

        await authClient.updateUser({
            name,
            image,
        });
        toast.success("Updated Successfully");
    };


    return (
        <Modal>
            <Button variant="outline" size="lg" className="border border-gray-300 px-6 py-2 flex items-center gap-2 hover:bg-cyan-500 hover:text-white transition rounded-full w-full justify-center mt-5">
                <BiEdit /> Edit Profile
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-xl">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading>Edit Profile </Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        e.preventDefault();
                                    }
                                }}
                                    onSubmit={handleUpdate} className=" space-y-8">
                                    <div className=" flex flex-col gap-4">

                                        <TextField
                                            name="newName"
                                            isRequired
                                        >
                                            <Label>Name</Label>
                                            <Input
                                                type="text"
                                                placeholder="John Doe"
                                                className="rounded-2xl"
                                            />
                                            <FieldError />
                                        </TextField>

                                        <TextField
                                            name="newImageUrl"
                                            isRequired
                                        >
                                            <Label>Image URL</Label>
                                            <Input
                                                type="url"
                                                placeholder="https://example.com/image.jpg"
                                                className="rounded-2xl"
                                            />
                                            <FieldError />
                                        </TextField>
                                    </div>

                                    {/* Buttons */}

                                    <Modal.Footer>
                                        <Button variant="outline" slot="close">
                                            Cancel
                                        </Button>
                                        <Button type="submit">
                                            Update
                                        </Button>
                                    </Modal.Footer>
                                </form>

                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}