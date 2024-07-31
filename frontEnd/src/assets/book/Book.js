import bookRomanceImg from "../book/cover-cust-693.jpg";
import bookActionAdventureImg from "../book/cover-cust-7150.jpg";
import bookMysteryThrillerImg from "../book/cover-cust-2262.jpg";

const Book = [
  {
    _id: 1,
    image: bookRomanceImg,
    title: "Emma",
    description:
      "The main character, Emma Woodhouse, is described in the opening paragraph as ''handsome, clever, and rich'' but is also rather spoiled. As a result of the recent marriage of her former governess, Emma pr_ides herself on her ability to matchmake, and proceeds to take under her wing an illegitimate orphan, Harriet Smith, whom she hopes to marry off to the vicar, Mr Elton. So conf_ident is she that she persuades Harriet to reject a proposal from a young farmer who is a much more suitable partner for the girl.",
    author: "Jane Austen",
    ISBN: "0141439580",
    pages: 380,
    rate: 3.5,
    price: 5,
    category: "ROMANCE",
  },
  {
    _id: 2,
    image: bookActionAdventureImg,
    title: "20,000 Leagues Under the Sea",
    description:
      "Sent to investigate mysterious encounters that are disrupting international shipping, Professor Aronnax, his servant Conseil, and disgruntled harpooner Ned Land are captured when their frigate is sunk during an encounter with the monster The submarine Nautilus and its eccentric Captain Nemo afford the professor and his companions endless fascination and danger as they're swept along on a yearlong undersea voyage.",
    author: "Jules Verne",
    ISBN: "140272599X",
    pages: 296,
    rate: 4,
    price: 5,
    category: "ACTION AND ADVENTURE",
  },
  {
    _id: 3,
    image: bookMysteryThrillerImg,
    title: "Crime and Punishment",
    description:
      "From the Russian master of psychological characterizations, this novel portrays the carefully planned murder of a miserly, aged pawnbroker by a destitute Saint Petersburg student named Raskolnikov, followed by the emotional, mental, and physical effects of that action. Translated by Constance Garnett.",
    author: "Fyodor Dostoyevsky",
    ISBN: "0140449132",
    pages: 491,
    rate: 4,
    price: 5,
    category: "MYSTERY AND THRILLER",
  },
];
export default Book;
