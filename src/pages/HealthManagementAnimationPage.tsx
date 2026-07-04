import React from "react";
import { Activity, BarChart3, Building2, GraduationCap, ShieldCheck, UsersRound } from "lucide-react";

const beats = [
  "Health management connects clinical care, people, resources, and outcomes.",
  "Every patient journey depends on coordinated decisions across the system.",
  "Leadership turns limited resources into safer, higher-quality care.",
];

export function HealthManagementAnimationPage() {
  return (
    <section className="animation-lab" aria-label="Health management animation sample">
      <div className="animation-stage">
        <div className="sample-meta">
          <span>Whiteboard + 3D sample</span>
          <strong>Chapter One: Health Management</strong>
        </div>

        <div className="whiteboard-panel">
          <div className="marker-line line-one" />
          <div className="marker-line line-two" />
          <div className="marker-line line-three" />

          <div className="lecturer">
            <div className="lecturer-head" />
            <div className="lecturer-body" />
            <div className="pointer" />
          </div>

          <div className="system-map">
            <div className="system-node hospital-node">
              <Building2 aria-hidden="true" />
              <span>Care</span>
            </div>
            <div className="system-node people-node">
              <UsersRound aria-hidden="true" />
              <span>Team</span>
            </div>
            <div className="system-node safety-node">
              <ShieldCheck aria-hidden="true" />
              <span>Safety</span>
            </div>
            <div className="system-node data-node">
              <BarChart3 aria-hidden="true" />
              <span>Data</span>
            </div>
            <div className="system-node learning-node">
              <GraduationCap aria-hidden="true" />
              <span>Learning</span>
            </div>
            <div className="pulse-core">
              <Activity aria-hidden="true" />
            </div>
          </div>

          <div className="resource-stack">
            <span className="resource-block staff">Staff</span>
            <span className="resource-block time">Time</span>
            <span className="resource-block funds">Funds</span>
            <span className="resource-block tools">Tools</span>
          </div>

          <div className="caption-track">
            {beats.map((beat, index) => (
              <p key={beat} className={`caption-beat beat-${index + 1}`}>
                {beat}
              </p>
            ))}
          </div>
        </div>

        <div className="scene-timeline" aria-label="Sample animation timeline">
          <span className="active">0:00 Intro</span>
          <span>0:12 Framework</span>
          <span>0:28 Patient flow</span>
          <span>0:45 Chapter map</span>
        </div>
      </div>
    </section>
  );
}
