from app.models import db, Subreddit

def seed_subreddits():
  ProgrammerHumor = Subreddit (
    name = "ProgrammerHumor",
    owner_id = 2,
    description = "Dedicated to humor and jokes relating to programmers and programming.",
    icon_url = "https://styles.redditmedia.com/t5_2tex6/styles/communityIcon_u89jf60zv7p41.png",
    banner_img = "https://styles.redditmedia.com/t5_2tex6/styles/bannerBackgroundImage_z6ejudtdz7p41.png"
  )
  Gaming = Subreddit (
    name = "Gaming",
    owner_id = 3,
    description = "A subreddit for (almost) anything related to games - video games, board games, card games, etc. (but not sports).",
    icon_url = "https://styles.redditmedia.com/t5_2qh03/styles/communityIcon_1isvxgkk7hw51.png?width=256&s=b2c4017083ea0176a3dd4837f6e009bbc8384f15",
    banner_img = "https://styles.redditmedia.com/t5_2qh03/styles/bannerBackgroundImage_j84aqdq3eyd91.png"
  )
  Funny = Subreddit (
    name = "Funny",
    owner_id = 5,
    description = "Welcome to r/Funny, Reddit's largest humour depository.",
    icon_url = "https://static.wikia.nocookie.net/emile/images/e/eb/Pietro_HHD.png/revision/latest?cb=20171009204529",
    banner_img = "https://t4.ftcdn.net/jpg/04/67/96/13/360_F_467961350_LlpfNFYVGUwkofWQzB4uptbSxl12rWps.jpg"
  )
  Food = Subreddit (
    name = "Food",
    owner_id = 8,
    description = "The hub for Food Images and more on Reddit",
    icon_url = "https://a.thumbs.redditmedia.com/bDWcvO6mkX1TIcTnrO-N-5QJPUaWaq6nnQFel3kywD8.png",
    banner_img = "https://styles.redditmedia.com/t5_2qh55/styles/bannerBackgroundImage_mkxku8m12of51.png"
  )
  Houseplants = Subreddit (
    name = "Houseplants",
    owner_id = 10,
    description = "A community focused on the discussion, care, and well-being of houseplants!",
    icon_url = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Animal_Crossing_Leaf.svg/504px-Animal_Crossing_Leaf.svg.png",
    banner_img = "https://preview.redd.it/52uunejr99s41.jpg?auto=webp&s=9040d78c64fd78c9f7d7bbf799453b5edab1f69f"
  )

  db.session.add(ProgrammerHumor)
  db.session.add(Gaming)
  db.session.add(Funny)
  db.session.add(Food)
  db.session.add(Houseplants)
  db.session.commit()


def undo_subreddits():
    db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
    db.session.commit()
