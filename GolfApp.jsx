import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";
import * as XLSX from "xlsx";

export default function GolfApp() {
  const [scorecard, setScorecard] = useState(
    Array.from({ length: 18 }, (_, i) => ({
      hole: i + 1,
      par: "",
      strokes: "",
      putts: "",
      club1: "",
      club2: "",
    }))
  );

  const updateField = (index, field, value) => {
    const updated = [...scorecard];
    updated[index][field] = value;
    setScorecard(updated);
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(scorecard);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Scorecard");
    XLSX.writeFile(workbook, "golf_scorecard.xlsx");
  };

  return (
    <div className="p-4 space-y-6">
      <div className="text-center">
        <img
          src="https://images.unsplash.com/photo-1616362155556-3f90063dff91?auto=format&fit=crop&w=1350&q=80"
          alt="Golf background"
          className="mx-auto rounded-2xl shadow-lg w-full max-h-64 object-cover"
        />
      </div>
      <h1 className="text-2xl font-bold text-center">Encodage Partie de Golf</h1>
      {scorecard.map((hole, i) => (
        <Card key={i} className="p-4">
          <CardContent className="space-y-2">
            <h2 className="font-semibold">Trou {hole.hole}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              <Input
                type="number"
                placeholder="Par"
                value={hole.par}
                onChange={(e) => updateField(i, "par", e.target.value)}
              />
              <Input
                type="number"
                placeholder="Coups joués"
                value={hole.strokes}
                onChange={(e) => updateField(i, "strokes", e.target.value)}
              />
              <Input
                type="number"
                placeholder="Putts"
                value={hole.putts}
                onChange={(e) => updateField(i, "putts", e.target.value)}
              />
              <Input
                placeholder="Club 1"
                value={hole.club1}
                onChange={(e) => updateField(i, "club1", e.target.value)}
              />
              <Input
                placeholder="Club 2"
                value={hole.club2}
                onChange={(e) => updateField(i, "club2", e.target.value)}
              />
            </div>
          </CardContent>
        </Card>
      ))}
      <div className="text-center">
        <Button onClick={exportToExcel} className="gap-2">
          <Download size={18} /> Exporter vers Excel
        </Button>
      </div>
    </div>
  );
}
