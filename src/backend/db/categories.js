import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    category: "sofa",
    description:
      "Sofa set is the most raided part of the Living room. It can add an everlasting appeal to your home decor.",
  },
  {
    _id: uuid(),
    category: "dining",
    description:
      "A dining table is a place where you sit down to have meals. A dining table set amplifies the bond over scrumptious meals. It acts as the centerpiece of your dining room, hence it is important that you carefully pick one.",
  },
  {
    _id: uuid(),
    category: "bed",
    description:
      "An ultimate comfort piece of furniture, the bed plays an important role in our lives. It is a place where we spend most of our time relaxing and rejuvenating",
  },
  {
    _id: uuid(),
    category: "table",
    description:
      "A table is a basic, indispensable piece of furniture for every household that occupies the centre space and helps make or break the room decor. ",
  },
  {
    _id: uuid(),
    category: "chair",
    description:
      "Chairs are an essential piece of furniture that can adorn a room and offer a distinct character to it.",
  },
];
