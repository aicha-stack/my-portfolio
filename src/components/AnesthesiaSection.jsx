export default function AnesthesiaSection() {
  return (
    <div>
      <h3 className="text-3xl font-semibold text-[#f0d8ff]">Côté Anesthésie</h3>
      <p className="mt-2 text-[#e8dfff]/80 max-w-2xl">Bienvenue dans mon premier année en anesthésie. Ici j'explique mon parcours, mes objectifs pour l'année, et les stages/expériences à venir.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl border border-[#EEC8F2]/20 bg-black/20 shadow-inner">
          <h4 className="font-semibold">Parcours</h4>
          <p className="text-sm mt-2 text-[#e8dfff]/75">Diplôme : Baccalauréat SVT — Classes préparatoires — Admission en 1ère année d'anesthésie.</p>
        </div>

        <div className="p-6 rounded-2xl border border-[#EEC8F2]/20 bg-black/10 shadow-inner">
          <h4 className="font-semibold">Objectifs de l'année</h4>
          <ul className="list-disc ml-5 mt-2 text-sm text-[#e8dfff]/75">
            <li>Maîtriser les bases physiologiques liées à l'anesthésie</li>
            <li>Participer activement aux stages hospitaliers</li>
            <li>Commencer à documenter cas et réflexions cliniques</li>
          </ul>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="font-semibold">Formations & Certifications</h4>
        <p className="text-sm mt-2 text-[#e8dfff]/75">Ajouter ici toutes les formations (BLS, ACLS, workshops...).</p>
      </div>
    </div>
  );
}
