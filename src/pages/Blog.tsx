import catHerbs from "@/assets/cat-herbs.jpg";

const blogPosts = [
  {
    title: "Black Pepper Spice Beef Recipe",
    category: "GardenFrost Puree",
    excerpt: "Mole sauce are a magnificent mixture fragrant layered flavors, and we're honing in on the best techniques...",
    date: "13 Feb 2023",
    views: 228,
  },
  {
    title: "Garlicky Punch and Finishes",
    category: "Backpepper",
    excerpt: "We combine famous carnitas flavor with herbaceous Indian spices for a unique fusion experience...",
    date: "21 Feb 2023",
    views: 177,
  },
  {
    title: "Spices Subscription Guide",
    category: "Backpepper",
    excerpt: "With blend we sought to capture the essence and introduce a new dimension of flavors to your kitchen...",
    date: "17 Mar 2023",
    views: 166,
  },
];

const Blog = () => (
  <div>
    <section className="bg-primary text-primary-foreground py-16 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Blog</h1>
        <p className="text-lg opacity-80">Latest articles, recipes, and tips</p>
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div key={post.title} className="product-card group">
            <div className="h-48 overflow-hidden">
              <img src={catHerbs} alt={post.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-5 space-y-3">
              <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded uppercase">
                {post.category}
              </span>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{post.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground pt-1">
                <span>{post.date}</span>
                <span>👁 {post.views}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Blog;
