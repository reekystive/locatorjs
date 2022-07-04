import { Fiber } from "@locator/shared";
import { getBoundingRect } from "../../getBoundingRect";
import { getComposedBoundingBox } from "../../getComposedBoundingBox";
import { getUsableName } from "../../getUsableName";

import { getAllFiberChildren } from "../../getAllFiberChildren";
import { SimpleNode } from "../../types";
import { makeFiberId } from "./makeFiberId";

export function fiberToSimple(
  fiber: Fiber,
  manualChildren?: SimpleNode[]
): SimpleNode {
  let simpleChildren;

  if (manualChildren) {
    simpleChildren = manualChildren;
  } else {
    const children = getAllFiberChildren(fiber);

    simpleChildren = children.map((child) => {
      return fiberToSimple(child);
    });
  }

  const element =
    fiber.stateNode instanceof Element || fiber.stateNode instanceof Text
      ? fiber.stateNode
      : fiber.stateNode?.containerInfo;

  if (element) {
    const box = getBoundingRect(element);
    return {
      type: "element",
      element: element,
      fiber: fiber,
      uniqueId: makeFiberId(fiber),
      name: getUsableName(fiber),
      box: box || getComposedBoundingBox(simpleChildren),
      children: simpleChildren,
      source: fiber._debugSource || null,
    };
  } else {
    return {
      type: "component",
      fiber: fiber,
      uniqueId: makeFiberId(fiber),
      name: getUsableName(fiber),
      box: getComposedBoundingBox(simpleChildren),
      children: simpleChildren,
      source: fiber._debugSource || null,
      definitionSourceFile: simpleChildren.reduce<string | null>(
        (acc, curr) => {
          if (curr.source?.fileName) {
            return curr.source?.fileName;
          } else {
            return acc;
          }
        },
        null
      ),
    };
  }
}