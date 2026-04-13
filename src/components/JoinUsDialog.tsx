import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface JoinUsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function JoinUsDialog({ open, onOpenChange }: JoinUsDialogProps) {
  const [form, setForm] = useState({ name: "", regNo: "", email: "", class: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.regNo.trim() || !form.email.trim() || !form.class.trim()) {
      toast({ title: "All fields are required", variant: "destructive" });
      return;
    }
    if (!form.email.includes("@") || !form.email.endsWith(".edu") && !form.email.endsWith(".in") && !form.email.endsWith(".com")) {
      toast({ title: "Please enter a valid student email", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast({ title: "Application Received! 🎉", description: "Welcome to the Eulim Science Club family." });
      setForm({ name: "", regNo: "", email: "", class: "" });
      setSubmitting(false);
      onOpenChange(false);
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md border-border bg-background">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Join the Nucleus ⚛️</DialogTitle>
          <DialogDescription>Apply to become a member of the Eulim Science Club.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name</label>
            <Input
              placeholder="e.g. John Doe"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={100}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Registration Number</label>
            <Input
              placeholder="e.g. 2411234"
              value={form.regNo}
              onChange={(e) => setForm({ ...form, regNo: e.target.value })}
              maxLength={20}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Student Email</label>
            <Input
              type="email"
              placeholder="e.g. name@christuniversity.in"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              maxLength={255}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Class</label>
            <Input
              placeholder="e.g. BSc Physics – 2nd Year"
              value={form.class}
              onChange={(e) => setForm({ ...form, class: e.target.value })}
              maxLength={50}
            />
          </div>
          <Button type="submit" className="w-full" disabled={submitting}>
            {submitting ? "Submitting…" : "Submit Application"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
