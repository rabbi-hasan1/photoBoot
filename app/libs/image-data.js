const photos = [
    {
      id: "94a7e01b-8576-4d18-8b84-6ae588db02d9",
      title: "The Beautiful Nature",
      url: "https://images.unsplash.com/photo-1505533321630-975218a5f66f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
      tags: ["nature", "river", "ocean"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=53",
        name: "Alex B",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    },
    {
      id: "de05d078-6f6d-4272-a08f-5a805a23aba4",
      title: "The Beautiful Nature",
      url: "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=733",
      tags: ["nature", "river", "ocean"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=54",
        name: "Brian Xelo",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    },
    {
      id: "8265198d-e2e1-4221-addc-8244f39fdd62",
      title: "The Beautiful Nature",
      url: "https://media.istockphoto.com/id/1127245421/photo/woman-hands-praying-for-blessing-from-god-on-sunset-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=Fbysb-YHuALb_Jyi4Q8Lw2QEVIFa3WSaPsvneGr7Q_8=",
      tags: ["nature", "river", "ocean"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=55",
        name: "Ceza Des",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    },
    {
      id: "6cf6c10d-8ba8-46d7-b246-0e1fd5e270df",
      title: "The Beautiful Nature",
      url: "https://media.istockphoto.com/id/184103864/photo/clouds-on-sky.webp?a=1&b=1&s=612x612&w=0&k=20&c=Rns43dSWPSYJG75Ya-fdWj2NoY1yIE5NxzTSl1JDmfM=",
      tags: ["nature", "river", "ocean"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=56",
        name: "Karim Bulletin",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    },
    {
      id: "a7f14fb2-9b2d-43bb-98af-6c70158e9c55",
      title: "The White Warmth",
      url: "https://images.unsplash.com/photo-1676037831142-ddc37a7614b3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      tags: ["nature", "flower", "green"],
      views: "6M",
      share: "2.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=57",
        name: "Madan PA",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 120
      },
      likes: 80
    },
    {
      id: "6bea51c4-1123-425f-90c9-9148724872e5",
      title: "The Beautiful Nature",
      url: "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      tags: ["nature", "river", "ocean"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=58",
        name: "Moina Lam",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    },
    {
      id: "02983ddd-338d-4382-b0c8-316caa21b4a5",
      title: "The Beautiful Nature",
      url: "https://images.unsplash.com/photo-1709884732294-90379fee354c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1528",
      tags: ["nature", "river", "ocean"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=59",
        name: "Nat B",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    },
    {
      id: "552f7d8d-d9eb-4edc-98a9-cec20c90d90c",
      title: "The Beautiful Nature",
      url: "https://plus.unsplash.com/premium_photo-1721317368393-09204f05aab5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      tags: ["nature", "river", "ocean"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=60",
        name: "Taral X",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    },
    {
      id: "f4fab2f9-e0cf-4f15-8779-d09d9e6d59bd",
      title: "The Beautiful Nature",
      url: "https://plus.unsplash.com/premium_photo-1684445034763-013f0525c40c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      tags: ["nature", "river", "ocean"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=61",
        name: "Zhoom B",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    },
    {
      id: "9761a3ea-2c2c-4b6e-a618-a6e4d26cf729",
      title: "The Beautiful Nature",
      url: "https://plus.unsplash.com/premium_photo-1724593532751-0a0cdb94a882?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632",
      tags: ["nature", "river", "ocean"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=62",
        name: "T Manhattan",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    },
    {
      id: "154ca3f8-07ec-464f-9eac-6775ec37bba1",
      title: "The Beautiful Nature",
      url: "https://images.unsplash.com/photo-1695760832442-6e4f479f8786?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      tags: ["nature", "river", "ocean"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=63",
        name: "Abhinash Chahal",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    },
    {
      id: "9e396ae7-9ae4-4fec-86e3-4fc52c73b73a",
      title: "The Beautiful Nature",
      url: "https://images.unsplash.com/photo-1695213999429-647b8542bbf0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxmcmVlJTIwaW1hZ2VzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
      tags: ["nature", "river", "ocean"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=64",
        name: "Cyrun X",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    },
    {
      id: "ddd5975e-d728-4e68-98d1-3b961ab9c18e",
      title: "The Beautiful Nature",
      url: "https://images.unsplash.com/photo-1634150607959-62c965982999?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688",
      tags: ["nature", "river", "ocean"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=65",
        name: "Matas Currian",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 420
      },
      likes: 100
    },
    {
      id: "dcbada31-fa30-4c25-9721-b46b1e6a8d6f",
      title: "The Beautiful Nature",
      url: "https://images.unsplash.com/photo-1619328359755-0428244824c4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      tags: ["nature", "river", "ocean"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=66",
        name: "Somani Dal",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    },
    {
      id: "f536658e-a274-431f-843d-34116dcc1b7e",
      title: "The Beautiful Nature",
      url: "https://plus.unsplash.com/premium_photo-1676490700186-0671a25fdfff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      tags: ["nature", "river", "ocean"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=67",
        name: "Tom Holla",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    }
  ];


  const getAlldata = () => {
    return photos ;
  }


  const getDataById = (id) => {
    return photos.find((photo) => photo.id === id);
  }

  export {
    getAlldata,
    getDataById
  }