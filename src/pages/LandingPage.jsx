import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ShoppingCart,
  LayoutDashboard,
  UtensilsCrossed,
  ArrowRight
} from "lucide-react";

const spring = { type: "spring", stiffness: 100, damping: 20 };

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ...spring }
  }
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 }
  }
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      
      <nav className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-primary" />
            <span className="font-semibold text-lg tracking-tight">
              FreshTrack
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <Link
              to="/login"
              className="text-muted-foreground hover:text-foreground transition"
            >
              Sign In
            </Link>

            <Link to="/signup">
              <Button size="sm" className="rounded-xl">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      
      <section className="max-w-4xl mx-auto px-6 pt-28 pb-28 text-center">
        <motion.div variants={stagger} initial="hidden" animate="show">

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold tracking-tight leading-tight"
          >
            Cook smarter with
            <br />
            what you already have.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            FreshTrack helps you manage groceries, track pantry items,
            and discover recipes based on ingredients already in your kitchen.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex justify-center"
          >
            <Link to="/signup">
              <Button className="h-12 px-8 rounded-xl">
                Try FreshTrack Free
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>

        </motion.div>
      </section>

     
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: <ShoppingCart className="w-5 h-5 text-primary" />,
              title: "Grocery Tracking",
              desc: "Add items quickly and keep your shopping list organized."
            },
            {
              icon: <LayoutDashboard className="w-5 h-5 text-primary" />,
              title: "Pantry Overview",
              desc: "See exactly what you have so you avoid buying duplicates."
            },
            {
              icon: <UtensilsCrossed className="w-5 h-5 text-primary" />,
              title: "Recipe Suggestions",
              desc: "Get meal ideas based on ingredients already in your kitchen."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="rounded-2xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4">
                {feature.icon}
              </div>

              <h3 className="font-semibold text-lg mb-2">
                {feature.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

     
      <section className="border-t border-border">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Start organizing your kitchen today.
          </h2>

          <p className="text-muted-foreground mb-10">
            It takes less than a minute to get started.
          </p>

          <Link to="/signup">
            <Button className="h-12 px-8 rounded-xl">
              Create Free Account
            </Button>
          </Link>
        </div>
      </section>

     
      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} FreshTrack. All rights reserved.
      </footer>
    </div>
  );
}

