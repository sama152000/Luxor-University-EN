// src/app/core/features/Luxor-university/Pages/organizational-structure/organizational-structure.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeModule } from 'primeng/tree';
import { SidebarModule } from 'primeng/sidebar';
import { TreeNode } from 'primeng/api';
import { DepartmentService } from '../../Services/department.service';
import { HierarchyNode, Department } from '../../model/department.model';
import { FooterComponent } from '../Shared/footer/footer.component';
import { PageHeaderComponent } from '../Shared/page-header/page-header.component';

@Component({
  selector: 'app-organizational-structure',
  standalone: true,
  imports: [CommonModule, TreeModule, SidebarModule, FooterComponent, PageHeaderComponent],
  templateUrl: './organizational-structure.component.html',
  styleUrls: ['./organizational-structure.component.css']
})
export class OrganizationalStructureComponent implements OnInit {
  orgChart: TreeNode[] = [];
  selectedNode: HierarchyNode | null = null;
  selectedDepartment: Department | null = null;
  isMobileSidebarVisible: boolean = false;
  isLoading: boolean = true;
  isSidebarVisible: boolean = false;
  zoomScale: number = 1;
  zoomTranslate: { x: number; y: number } = { x: 0, y: 0 };

  constructor(public departmentService: DepartmentService) {}

  ngOnInit() {
    const structure = this.departmentService.getOrgStructure();
    this.orgChart = this.convertToPrimeTree(structure);
    this.isLoading = false;
  }

  private convertToPrimeTree(node: HierarchyNode): TreeNode[] {
    return [{
      label: `${node.name} - ${node.position}`,
      expanded: true,
      data: node,
      children: node.children?.map(child => this.convertToPrimeTree(child)[0]) || []
    }];
  }

  onNodeSelect(event: any) {
    this.selectedNode = event.node.data;
    this.selectedDepartment = this.selectedNode?.department ?? null;
    this.toggleSidebar();
  }

  onDepartmentSelect(dept: Department) {
    this.selectedDepartment = dept;
  }

  toggleMobileSidebar() {
    this.isMobileSidebarVisible = !this.isMobileSidebarVisible;
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  closeSidebar() {
    this.isSidebarVisible = false;
  }

  zoomIn() {
    this.zoomScale = Math.min(this.zoomScale + 0.1, 2);
  }

  zoomOut() {
    this.zoomScale = Math.max(this.zoomScale - 0.1, 0.5);
  }

  resetZoom() {
    this.zoomScale = 1;
    this.zoomTranslate = { x: 0, y: 0 };
  }

  downloadPDF() {
    // Implement PDF download functionality
    console.log('Downloading PDF...');
    // Using jsPDF or similar library
  }

  getNodeIcon(node: TreeNode): string {
    const position = node.data?.position;
    switch (position) {
      case 'University President':
        return 'pi pi-crown';
      case 'Vice President':
        return 'pi pi-star';
      case 'Secretary-General':
        return 'pi pi-briefcase';
      case 'Deputy Secretary':
        return 'pi pi-user-plus';
      case 'Department':
        return 'pi pi-building';
      case 'Sub-Department':
        return 'pi pi-folder';
      case 'Advisor':
        return 'pi pi-info-circle';
      default:
        return 'pi pi-user';
    }
  }

  toggleNode(node: TreeNode, index: number, isChild?: boolean) {
    node.expanded = !node.expanded;
  }
}
