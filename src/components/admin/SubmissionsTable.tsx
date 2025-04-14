
import { useState, Fragment } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, Download, MoreHorizontal } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { FormSubmission } from '@/types/forms';
import { updateSubmissionStatus, exportAsCsv } from '@/utils/formSubmission';

interface SubmissionsTableProps {
  submissions: FormSubmission[];
  formType: FormSubmission['formType'];
  onUpdate: () => void;
}

export function SubmissionsTable({ submissions, formType, onUpdate }: SubmissionsTableProps) {
  const [expandedRowId, setExpandedRowId] = useState<string | null>(null);
  
  const handleStatusUpdate = (id: string, status: 'accepted' | 'rejected') => {
    updateSubmissionStatus(id, status);
    onUpdate();
  };
  
  const handleExportSingle = (submission: FormSubmission) => {
    exportAsCsv([submission]);
  };
  
  const toggleRowExpansion = (id: string) => {
    setExpandedRowId(expandedRowId === id ? null : id);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };
  
  const renderStatusBadge = (status: string | undefined) => {
    if (status === 'accepted') {
      return <Badge className="bg-green-500">Accepted</Badge>;
    } else if (status === 'rejected') {
      return <Badge variant="destructive">Rejected</Badge>;
    } else if (status === 'pending') {
      return <Badge variant="outline" className="text-orange-500 border-orange-500">Pending</Badge>;
    }
    return null;
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Submission Date</TableHead>
            <TableHead>Name</TableHead>
            {formType === 'abalatMzgeba' && <TableHead>Status</TableHead>}
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {submissions.length === 0 ? (
            <TableRow>
              <TableCell colSpan={formType === 'abalatMzgeba' ? 5 : 4} className="text-center py-8 text-muted-foreground">
                No submissions found
              </TableCell>
            </TableRow>
          ) : (
            submissions.map((submission) => (
              <Fragment key={submission.id}>
                <TableRow 
                  className="cursor-pointer hover:bg-muted/50"
                  onClick={() => toggleRowExpansion(submission.id)}
                >
                  <TableCell className="font-mono text-xs">{submission.id.slice(0, 8)}...</TableCell>
                  <TableCell>{formatDate(submission.submittedAt)}</TableCell>
                  <TableCell>{submission.data.fullName || 'Anonymous'}</TableCell>
                  {formType === 'abalatMzgeba' && (
                    <TableCell>{renderStatusBadge(submission.status)}</TableCell>
                  )}
                  <TableCell className="text-right">
                    <div onClick={e => e.stopPropagation()} className="flex justify-end gap-2">
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => handleExportSingle(submission)}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                      
                      {formType === 'abalatMzgeba' && submission.status === 'pending' && (
                        <>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            className="text-green-500 hover:text-green-600 hover:bg-green-50"
                            onClick={() => handleStatusUpdate(submission.id, 'accepted')}
                          >
                            <CheckCircle className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            className="text-red-500 hover:text-red-600 hover:bg-red-50"
                            onClick={() => handleStatusUpdate(submission.id, 'rejected')}
                          >
                            <XCircle className="h-4 w-4" />
                          </Button>
                        </>
                      )}
                      
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => toggleRowExpansion(submission.id)}>
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleExportSingle(submission)}>
                            Export as CSV
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                </TableRow>
                
                {/* Expanded row with details */}
                {expandedRowId === submission.id && (
                  <TableRow>
                    <TableCell colSpan={formType === 'abalatMzgeba' ? 5 : 4} className="bg-muted/30">
                      <div className="py-2 px-4">
                        <h4 className="font-medium mb-2">Submission Details</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {Object.entries(submission.data).map(([key, value]) => (
                            <div key={key}>
                              <span className="text-sm font-medium text-muted-foreground block">
                                {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:
                              </span>
                              <span className="block mt-1">{String(value)}</span>
                            </div>
                          ))}
                        </div>
                        
                        {formType === 'abalatMzgeba' && submission.status === 'pending' && (
                          <div className="mt-4 flex gap-2">
                            <Button 
                              size="sm"
                              className="bg-green-500 hover:bg-green-600"
                              onClick={() => handleStatusUpdate(submission.id, 'accepted')}
                            >
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Accept Registration
                            </Button>
                            <Button 
                              size="sm"
                              variant="destructive"
                              onClick={() => handleStatusUpdate(submission.id, 'rejected')}
                            >
                              <XCircle className="h-4 w-4 mr-2" />
                              Reject Registration
                            </Button>
                          </div>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </Fragment>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
