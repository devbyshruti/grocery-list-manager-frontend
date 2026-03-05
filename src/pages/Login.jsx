import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Mail, Lock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const spring = { type: "spring", stiffness: 100, damping: 20 };

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ...spring },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ email, password });
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">

      
      <div className="absolute top-1/3 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      
      <nav className="border-b border-border relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-primary" />
            <span className="font-semibold text-lg tracking-tight">
              FreshTrack
            </span>
          </div>
          <Link to="/signup">
            <Button size="sm" variant="outline" className="rounded-xl">
              Get Started
            </Button>
          </Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-32 relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
         
          <motion.div variants={fadeUp}>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
              Welcome back to
              <br />
              <span className="text-primary">
                FreshTrack
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              Sign in to manage your groceries, track your pantry,
              and get personalized recipe suggestions.
            </p>
          </motion.div>

         
          <motion.div
            variants={fadeUp}
            className="w-full max-w-md mx-auto lg:mx-0"
          >
            <Card className="border border-border bg-card/95 backdrop-blur-sm rounded-2xl shadow-xl shadow-primary/5">
              <CardContent className="p-8">
              
                <div className="flex items-center gap-3 mb-8 pb-6 border-b border-border">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <ShoppingCart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight">
                      Sign In
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Securely access your account
                    </p>
                  </div>
                </div>

               
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 h-12 rounded-xl focus-visible:ring-primary"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10 h-12 rounded-xl focus-visible:ring-primary"
                        required
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 rounded-xl text-lg font-medium shadow-md hover:shadow-lg transition-all"
                  >
                    Sign In
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>

               
                <div className="relative my-8">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      New to FreshTrack?
                    </span>
                  </div>
                </div>

                
                <div className="text-center">
                  <Link
                    to="/signup"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline group"
                  >
                    Create Free Account
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>

      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground relative z-10">
        © {new Date().getFullYear()} FreshTrack. All rights reserved.
      </footer>
    </div>
  );
};

export default Login;
