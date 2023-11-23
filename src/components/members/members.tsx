import type { ReactElement } from 'react'

import "./members.scss"

import * as Tabs from "@radix-ui/react-tabs";
import {departments} from "../../lib/organization.ts";

const Members = (): ReactElement => (
    <section className="about-container">
      <Tabs.Root className="about-tabs" defaultValue={departments[0].id}>
        <h1 className="about-heading">團隊</h1>

        <Tabs.List className="about-tabs__list">
          {departments.map((department, index) => (
              <Tabs.Trigger
                  key={index}
                  value={department.id}
                  className="about-tabs__trigger"
              >
                {department.name}
              </Tabs.Trigger>
          ))}
        </Tabs.List>

        {departments.map((department) => (
            <Tabs.Content key={department.id} value={department.id}>
              <div className="about-tabs__content">
                {department.members.map((member, index) => (
                    <div key={`about-${department.id}-${index}`} className="about-member-name">{member.name}</div>
                ))}
              </div>
            </Tabs.Content>
        ))}
      </Tabs.Root>
    </section>
);

export default Members